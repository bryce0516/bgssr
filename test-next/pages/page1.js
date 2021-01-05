import Head from 'next/head';
import Icon from '../static/icon.png'
import Link from 'next/link'
import { add } from '../src/util'
import styled from 'styled-components'

const MyP = styled.div`
  color: blue;
  font-size: 18pt;
`

const Page1 = () => {
  return (
    <>
    <div>
      <MyP>This is home pages</MyP>
      <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
      <img src={Icon} />
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      {/* <style jsx>{`
        p {
          color: blue;
          font-size: 18pt;
        }
      `}</style> */}
    </div>
    <div>
      <Link href="/page2">
        <a>move to page2</a>
      </Link>
    </div>
    </>
    );
}
 
export default Page1;