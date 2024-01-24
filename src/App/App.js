import { useState, useEffect } from 'react';
import './App.css';
import NewsStories from '../NewsStories/NewsStories';
import topHeadlines from '../sampleData/topHeadlines';
import SingleNewsDetails from '../SingleNewsDetails/SingleNewDetails';
import { Routes, Route, Link } from 'react-router-dom';
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
    <main className="main-container">
      <header>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>News Nook Now</Link>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="App">
                <NewsStories className="news-stories" stories={stories} displayNewsStory={displayNewsStory}/>
              </div>
            </>
            }
            />
        <Route path="/article/:id" element={<SingleNewsDetails selectedNewsStory={selectedNewsStory} displayHomePage={displayHomePage}/>} />
      </Routes>
    </main>
  );
}

