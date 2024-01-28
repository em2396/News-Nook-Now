import { useState, useEffect } from 'react';
import './App.css';
import NewsStories from '../NewsStories/NewsStories';
import topHeadlines from '../sampleData/topHeadlines';
import SingleNewsDetails from '../SingleNewsDetails/SingleNewDetails';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import { Routes, Route, Link } from 'react-router-dom';
// import { getStories } from '../apiCalls/apiCall';

export default function App() {
  const [ stories, setStories ] = useState(topHeadlines); 
  const [ selectedNewsStory, setSelectedNewsStory ] = useState(null);
  const [filteredStories, setFilteredStories] = useState([]);
  

  // useEffect(() => {
  //  getStories() 
  //    .then(data => {
  //        console.log(data)
  //        setStories(data)
  //})
  // }, [])

  function displayNewsStory(id) {
    const singleStory = stories.find(news => {
     return news.publishedAt === id
    })
    setSelectedNewsStory(singleStory);
  };
  console.log(selectedNewsStory, 'selected news story')

  
  function displayHomePage() {
    setSelectedNewsStory(null);
  }
  
  
  
  return (
    <main className="main-container">
      <header>
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>News Nook Now</Link>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
                <Search className="search-component" setFilteredStories={setFilteredStories} />
                <NewsStories className="news-stories" stories={filteredStories.length > 0 ? filteredStories : stories} displayNewsStory={displayNewsStory}/>
              </div>
            }
            />
        <Route path="/article/:id" element={<SingleNewsDetails selectedNewsStory={selectedNewsStory} displayHomePage={displayHomePage}/>} />
        <Route path="/search" element={<SearchResults filteredStories={filteredStories} displayHomePage={displayHomePage}/>} />
      </Routes>
    </main>
  );
}


// function displayFiltered(resultOfSearch) {
//   console.log(resultOfSearch, 'inside app')
//   setSelectedNewsStory(resultOfSearch)
// }
// console.log(selectedNewsStory, 'inside app usestate')