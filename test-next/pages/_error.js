ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode }
}

export default function ErrorPage ({statusCode}){
  return (
    <div>
      {statusCode === 404 && 'not found pages'}
      {statusCode === 500 && 'do not known error'}
      {!statusCode && 'occur error from client page'}
    </div>
  )
}

