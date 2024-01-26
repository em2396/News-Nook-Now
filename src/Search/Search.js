import { useState } from 'react';
import './Search.css';
import { getEverything } from '../apiCalls/apiCall';
import everythingData from '../sampleData/everythingData';

export default function Search() {
    const [ search, setSearch ] = useState('');

    function searchResults(event) {
        // getEverything()
        //     .then(data => {
        //         const result = data.filter(text => text.toLowerCase().includes(search.toLowerCase()));
        //     })
        const result = everythingData.filter(one => one.toLowerCase().includes(search.toLowerCase()));
        return result; 
    }

    return (
        <form>
            <input className='search-input'
                type="text"
                placeholder="search"
                name="search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <button className='search-button' onClick={event => searchResults(event)}>Search</button>
        </form>
    )
}