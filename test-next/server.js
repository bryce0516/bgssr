const express = require('express')

// const server = express()

// server.use(express.static('out'))
// server.listen(3000, err => {
//   if (err) throw err;
// })


const next = require('next')
const url = require('url')
const lruCahce = require('lru-cache')
const fs = require('fs')

const ssrCache = new lruCahce({
  max:100,
  maxAge: 1000 * 60
})

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express()
  
  // server.get('/page/:id', (req, res) => {
  //   res.redirect(`/page${req.params.id}`)
  // })
  server.get(/^\/page[1-9]/, (req, res) => {
    return renderAndCache(req, res)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if(err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
  })
})

const prerenderList = [
  { name: 'page1', path: '/page1' },
  { name: 'page2-hello', path: '/page2?text=hello' },
  { name: 'page2-world', path: '/page2?text=world' },
];

const prerenderCache = {};
if(!dev) {
  for (const info of prerenderList) {
    const { name, path } = info
    const html = fs.readFileSync(`./out/${name}.html`, 'utf8');
    prerenderCache[path] = html;
  }
}

async function renderAndCache( req, res) {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parsedUrl.path;
  console.log("this is cache key",cacheKey,ssrCache.has(cacheKey))
  if(ssrCache.has(cacheKey)) {
    console.log('using cache')
    res.send(ssrCache.get(cacheKey))
    return;
  }
  if(prerenderCache.hasOwnProperty(cacheKey)){
    console.log(' html code before rendering')
    res.send(prerenderCache[cacheKey])
    return;
  }
  try{
    const { query, pathname } = parsedUrl
    const html = await app.renderToHTML(req, res, pathname, query);
    if(res.statusCode === 200) {
      ssrCache.set(cacheKey, html);
    }
    res.send(html)
  } catch(err) {
    app.renderError(err, req, res, pathname, query)
  }
}