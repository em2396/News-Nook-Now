import { Link } from 'react-router-dom';
import './SingleNewsDetails.css';

export default function SingleNewDetails({selectedNewsStory, displayHomePage}) {
    return (
        <div className='details-container'>
            <h1>{selectedNewsStory.title}</h1>
            <h2>{selectedNewsStory.author}</h2>
            <p>{selectedNewsStory.content}</p>
            <p>Source : {selectedNewsStory.source.name}</p>
            <p>Link to original article: {selectedNewsStory.url}</p>
            <img src={selectedNewsStory.urlToImage}/>
            <Link to="/"> 
                <button className="back-to-home" onClick={() => displayHomePage()}>Back To Home</button>
            </Link>
        </div>
    )
}