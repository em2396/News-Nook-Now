import { useState, useEffect } from 'react';
import './App.css';
import NewsStories from '../NewsStories/NewsStories';
import topHeadlines from '../sampleData/topHeadlines';
// import { getStories } from '../apiCalls/apiCall';

export default function App() {
  const [ stories, setStories ] = useState(topHeadlines)

  // useEffect(() => {
  //  getStories() 
  //    .then(data => {
  //        console.log(data)
  //        setStories(data)
  //})
  // }, [])

  return (
    <div className="App">
      <header>News Nook Now</header>
      <NewsStories stories={stories}/>
    </div>
  );
}

