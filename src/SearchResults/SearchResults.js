import { Link } from 'react-router-dom';

export default function SearchResults({filteredStories, displayHomePage}) {

    console.log(filteredStories,'inside single  component')
    if (!filteredStories) {
        return <p>Unable to dispalay</p>
      }


    return (
        <div className='details-container'>
            <h1>{filteredStories.title}</h1>
            <h2>{filteredStories.author}</h2>
            <p>{filteredStories.content}</p>
            <p>Source : {filteredStories.source.name}</p>
            <p>Link to original article: {filteredStories.url}</p>
            <img src={filteredStories.urlToImage}/>
            <Link to="/"> 
                <button className="back-to-home" onClick={() => displayHomePage()}>Back To Home</button>
            </Link>
        </div>
    )
}