import './NewsStories.css';
import NewsCard from '../NewsCard/NewsCard';
// import topHeadlines from '../sampleData/topHeadlines';



export default function NewsStories({stories, displayNewsStory}) {
    // console.log(stories, 'stories')
    // console.log(topHeadlines, 'top headlines')
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
        <div>
            {individualCards}
        </div>
    )
}