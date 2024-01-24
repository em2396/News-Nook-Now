import { Link } from 'react-router-dom';

export default function SingleNewDetails({selectedNewsStory, displayHomePage}) {
    console.log(selectedNewsStory, 'made it ')

    //A “detailed” view for each article (headline, image, date, content, source
    return (
        <div>
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