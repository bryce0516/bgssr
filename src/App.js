import React, { useState, useEffect } from 'react'
import Home from './Home'
import About from './About'
import styled from 'styled-components';
import Icon from './icon.png'

export default function App({ gpage }) {
  const [ page, setPage ] = useState(gpage);
  const [ username, setUsername ] = useState(null);

  useEffect(() => {
    fetchUsername().then(data => setUsername(data));
  },[]);

  useEffect(() => {
    window.onpopstate = event => {
      setPage(event.state);
    };
  },[]);

  const onChangePage = (e) => {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '' , `/${newPage}`);
    setPage(newPage);
  }

  const PageComponent = page === 'home' ? Home : About;
  return (
    <Container>
      <div className="container">
        <button data-page="home" onClick={onChangePage}>
          Home
        </button>
        <button data-page="about" onClick={onChangePage}>
          About
        </button>
        <PageComponent  username={username}/>
      </div>
      <img src={Icon} />
    </Container>
  )
}

const Container = styled.div`
  background-color: #aaaaaa;
  border: 1px solid blue;
`;

function fetchUsername() {
  const usernames = ['mike','june', 'jamie'];
  return new Promise(resolve => {
    const username = usernames[Math.floor(Math.random() * 3)];
    setTimeout(() => resolve(username), 100);
  });
}