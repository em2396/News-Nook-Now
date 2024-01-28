import { useState, useEffect } from 'react';
import './App.css';
import NewsStories from '../NewsStories/NewsStories';
import topHeadlines from '../sampleData/topHeadlines';
import SingleNewsDetails from '../SingleNewsDetails/SingleNewDetails';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import SearchNewsStories from '../SearchNewsStories/SearchNewsStories'
import { Routes, Route, Link } from 'react-router-dom';
import { getEverything } from '../apiCalls/apiCall';


export default function App() {
  const [ stories, setStories ] = useState(topHeadlines); 
  const [ selectedNewsStory, setSelectedNewsStory ] = useState(null);
  const [filteredStories, setFilteredStories] = useState([]);
  

  useEffect(() => {
   getEverything() 
     .then(data => {
         setStories(data.articles)
  })
  }, [])

  function displayNewsStory(id) {
    const singleStory = stories.find(news => {
     return news.publishedAt === id
    })
    setSelectedNewsStory(singleStory);
  };


  function displaySearchedStories(id) {
    const singleStory = filteredStories.find(news => news.publishedAt === id)
    setFilteredStories(singleStory);
  }
  
  function displayHomePage() {
    setSelectedNewsStory(null);
    setFilteredStories(null);
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
                <NewsStories className="news-stories" stories={stories} displayNewsStory={displayNewsStory}/>
            </div>
            }
            />
        <Route path="/list-of-articles" element={ <SearchNewsStories filteredStories={filteredStories} displaySearchedStories={displaySearchedStories}/> }/>
        <Route path="/article/:id" element={<SingleNewsDetails selected={selectedNewsStory} displayHomePage={displayHomePage}/>} />
        <Route path="/search/:id" element={<SearchResults filteredStories={filteredStories} displayHomePage={displayHomePage}/>} />
      </Routes>
    </main>
  );
}
