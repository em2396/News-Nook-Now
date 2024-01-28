import { Link } from 'react-router-dom';
import './SingleNewsDetails.css';

export default function SingleNewDetails({selected, displayHomePage}) {

    return (
        <div className='details-container'>
            <h1>{selected.title}</h1>
            <h2>{selected.author}</h2>
            <p>{selected.content}</p>
            <p>Source : {selected.source.name}</p>
            <img src={selected.urlToImage} alt="image"/>
            <p>
                <a href={selected.url} target="_blank" rel="noopener noreferrer">Link to original article</a>
            </p>
            <Link to="/"> 
                <button className="back-to-home" onClick={() => displayHomePage()}>Back To Home</button>
            </Link>
        </div>
    )
}