import { useState, useEffect } from 'react';
import './App.css';
import NewsStories from '../NewsStories/NewsStories';
import topHeadlines from '../sampleData/topHeadlines';
import SingleNewsDetails from '../SingleNewsDetails/SingleNewDetails';
import { Routes, Route } from 'react-router-dom';
// import { getStories } from '../apiCalls/apiCall';

export default function App() {
  const [ stories, setStories ] = useState(topHeadlines); 
  const [ selectedNewsStory, setSelectedNewsStory ] = useState(null);

  // useEffect(() => {
  //  getStories() 
  //    .then(data => {
  //        console.log(data)
  //        setStories(data)
  //})
  // }, [])

  function displayNewsStory(id) {
    console.log(id, 'id')
    const singleStory = stories.find(news => {
     return news.publishedAt === id
    })
    setSelectedNewsStory(singleStory);
  };

  function displayHomePage() {
    setSelectedNewsStory(null);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="App">
              <header>News Nook Now</header>
              <NewsStories stories={stories} displayNewsStory={displayNewsStory}/>
            </div>
          </>
          }
      />
      <Route path="/article/:id" element={<SingleNewsDetails selectedNewsStory={selectedNewsStory} displayHomePage={displayHomePage}/>} />
    </Routes>
  );
}

