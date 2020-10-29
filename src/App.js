import React from 'react';
import './App.css';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
