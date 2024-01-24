import './NewsCard.css';

export default function NewsCard({author, content, description, title, url, urlToImage, key}) {

    return (
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <p>{description}</p>
        </div>
    )
}