import { Link } from 'react-router-dom';
import './SearchResults.css'

export default function SearchResults({filteredStories, displayHomePage}) {

    return (
        <div className='search-details-container'>
            <h1>{filteredStories.title}</h1>
            <h2>{filteredStories.author}</h2>
            <p>{filteredStories.content}</p>
            <p>Source : {filteredStories.source.name}</p>
            <img src={filteredStories.urlToImage}/>
            <p>
                <a href={filteredStories.url} target="_blank" rel="noopener noreferrer">Link to original article</a>
            </p>
            <Link to="/"> 
                <button className="back-to-home" onClick={() => displayHomePage()}>Back To Home</button>
            </Link>
        </div>
    )
}