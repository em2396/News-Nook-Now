import './NewsCard.css';
import { Link } from 'react-router-dom';

export default function NewsCard({author, description, title, date, id, urlToImage, displayNewsStory}) {

    //headline, image, description (if present), date
    //When clicked, it should show the headline, image, date, content, and source
        return (
        <div>
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