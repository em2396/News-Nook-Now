import { useState, useEffect} from 'react';
import './Search.css';
import { getEverything } from '../apiCalls/apiCall';
import everythingData from '../sampleData/everythingData';
import { useNavigate  } from 'react-router-dom';

export default function Search({setFilteredStories, displayFiltered}) {
    const [ search, setSearch ] = useState('');
    const navigate = useNavigate();

    function searchResults(event) {
        event.preventDefault();
        const resultOfSearch = everythingData.filter(story =>
          story.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredStories(resultOfSearch);
        console.log(resultOfSearch, 'results of search')
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

