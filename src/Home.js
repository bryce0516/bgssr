import React from 'react'

const Home = ({username}) => {
  return (
    <div>
      <h3>this is home function</h3>
      {username && <p>{`${username} hi greeting!`}</p>}
    </div>
  )
}

export default Home