import { useState } from 'react';
import './Search.css';
import { getEverything } from '../apiCalls/apiCall';
import { useNavigate } from 'react-router-dom';

export default function Search({setFilteredStories}) {
    const [ search, setSearch ] = useState('');
    const navigate = useNavigate();
    
    function searchResults(event) {
        event.preventDefault();
        getEverything()
            .then(data => {
                const resultOfSearch = data.articles.filter(story =>
                  story.title.toLowerCase().includes(search.toLowerCase())
                );
                setFilteredStories(resultOfSearch);
                navigate('/list-of-articles')
            })
      }

    return (
        <form>
            <input className='search-input'
                type="text"
                placeholder="search by title"
                name="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
                />
            <button className='search-button' onClick={(event) => searchResults(event)}>Search</button>
        </form>
    )
}
