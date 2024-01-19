
function getStories() {
    return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=74f9281fc683401e949aad7e3b756e59')
        .then(response => {
            if(!response.ok) {
                console.log('error')
           }
           return response.json();
        });
};

function getEverything() {
    return fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=74f9281fc683401e949aad7e3b756e59')
        .then(response => {
            if(!response.ok) {
                console.log('error')
            }
            return response.json();
        })
}




export { getStories, getEverything }