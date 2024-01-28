import './SearchNewsCard.css';
import { Link } from 'react-router-dom';

export default function SearchNewsCard({author, description, title, date, id, urlToImage, displaySearchedStories}) {

        return (
        <div className='single-story'>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{description}</p>
            <Link to={`/search/${id}`}>
                <img src={urlToImage} onClick={() => displaySearchedStories(id)}/>
            </Link>
            <p>Published on: {date}</p>
        </div>
    )
}