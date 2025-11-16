const videoCard = document.querySelector('.video_content');

let api_key = "AIzaSyCoienmq2efReeol57AglEWMblp54bSLFU"

let video = "https://www.googleapis.com/youtube/v3/videos?";

let channel= "https://www.googleapis.com/youtube/v3/channels?";


fetch(video + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResult: 1,
    regionCode: 'US'
}))
.then(res => res.json())
.then(data => {
    data.items.forEach(item =>{
        console.log(data)
        getChannelIcon(item);
    })
})
.catch(err => console)

const getChannelIcon = (video_data) => {
    fetch(channel + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    })) 
    .then(res => res.json())
    .then(data => {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) => {
    videoCard.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}>
        <img scr="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img scr="${data.channelThumbnail}" class="channel" alt=""> 
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