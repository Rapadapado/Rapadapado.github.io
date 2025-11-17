const videoCard = document.querySelector('.video_content');

let api_key = "AIzaSyCoienmq2efReeol57AglEWMblp54bSLFU"

let video = "https://www.googleapis.com/youtube/v3/videos?";

let channel= "https://www.googleapis.com/youtube/v3/channels?";

let search= "https://www.googleapis.com/youtube/v3/search?"


fetch(video + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 32,
    regionCode: 'US'
}))
.then(res => res.json())
.then(data => {
    console.log(data);
    data.items.forEach(item =>{
        getChannelIcon(item);
    })
})
.catch(err => console.log(err))

const getChannelIcon = (video_data) => {
    fetch(channel + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    })) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        console.log(video_data);
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCard.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="${data.channelThumbnail}" class="channel" alt=""> 
                <div class="info">
                    <h4 class="title">${data.snippet.title}</h4>
                    <p class="channel_name">${data.snippet.channelTitle}</p>
                </div>
            </div>
    </div>
    `
}

const searchInput = document.querySelector('.searchbar');
const searchBtn = document.querySelector('.searchbtn');
let searchLink = "https://www.youtube.com/results?search_query=";


searchBtn.addEventListener('click', () => {
    if(searchInput.value.length){
        location.href = searchLink + searchInput.value;
    }
})

/*searchBtn.addEventListener('click', () => {
    /*if(searchInput.value.length){
        location.href = search + searchInput.value;
    }
    searchByKeyword();
})*/

/*document.addEventListener('DOMContentLoaded', function () {
    searchByKeyword();
});


function searchByKeyword() {
  var results = YouTube.Search.list({
    key: api_key,
    part: 'snippet',
    maxResults: 32,
    order: 'date',
    type: 'video',
    q: searchInput
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })

  for(var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  }
}*/

/*function searchByKeyword() {
    const apiKey = 'search';
    const searchInput = document.
        getElementById('searchInput').value;

    const videoCard = document.
        getElementById('.video_content');

    if (searchInput.trim() !== '') {

        videoCard.innerHTML = '<p>Loading...</p>';

        fetch(`search${apiKey}&s=${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.Search && data.Search.length > 0) {
                    makeVideoCard(data.Search);
                } else {
                    MoviesGrid.innerHTML =
             '<p>No movies found with the given name!</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                MoviesGrid.innerHTML =
           '<p>Error fetching movies. Please try again later.</p>';
            });
    } else {
        alert('Enter a movie title then search!');
    }
}*/

