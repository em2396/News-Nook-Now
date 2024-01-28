import './NewsCard.css';
import { Link } from 'react-router-dom';

export default function NewsCard({author, description, title, date, id, urlToImage, displayNewsStory}) {
    console.log(title, id)
        return (
        <div className='single-story'>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{description}</p>
            <Link to={`/article/${id}`}>
                <img src={urlToImage} onClick={() => displayNewsStory(id)}/>
            </Link>
            <p>Published on: {date}</p>
        </div>
    )
}