// import './SearchNewsStories.css';
import SearchNewsCard from '../SearchNewsCard/SearchNewsCard';

export default function SearchNewsStories({filteredStories, displaySearchedStories}) {

    const individualCards = filteredStories.map(story => {
        return (
            <SearchNewsCard className="search-news-stories" 
                author={story.author}
                content={story.content}
                description={story.description}
                title={story.title}
                url={story.url}
                urlToImage={story.urlToImage}
                key={story.url}
                id={story.publishedAt}
                date= {new Date(story.publishedAt).toLocaleString()}
                displaySearchedStories={displaySearchedStories}
            />
        )
    })

    return (
        <div className="individual-cards">
            {individualCards}
        </div>
    )
}