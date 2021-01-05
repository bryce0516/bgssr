import { callApi } from '../src/api'
import Router from 'next/router'

Page2.getInitialProps = async ({ query, req }) => {
  const text = query.text || 'none';
  const data = await callApi();
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { sayHello } = await import('../src/sayHello')
  console.log(sayHello());
  return { text, data, userAgent };
};

export default function Page2({ text, data, userAgent }) {
  function onClick() {
    import('../src/sayHello').then(({ sayHello }) => console.log(sayHello()))
  }
  return (
    <div>
      <p>this is home page2</p>
      <p>{`text: ${text}`}</p>
      <p>{`data: ${data}`}</p>
      <p>{`useragent : ${userAgent}`}</p>
      <button onClick={() => Router.push('/page1')}>move to page1</button>
      <button onClick={onClick}>sayHello</button>
    </div>
  )
}