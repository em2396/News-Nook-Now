import './NewsStories.css';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsStories({stories, displayNewsStory}) {
    const individualCards = stories.map(story => {
        return (
            <NewsCard
                author={story.author}
                content={story.content}
                description={story.description}
                title={story.title}
                url={story.url}
                urlToImage={story.urlToImage}
                key={story.url}
                id={story.publishedAt}
                date= {new Date(story.publishedAt).toLocaleString()}
                displayNewsStory={displayNewsStory}
            />
        )
    })


    return (
        <div className="individual-cards">
            {individualCards}
        </div>
    )
}