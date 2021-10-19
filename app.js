console.log("Let's get this party started!");

// DOM Items
const form = document.querySelector('#submitForm')
const searchInput = document.querySelector('#searchInput')
const searchBtn = document.querySelector('#search')
const removeAllBtn = document.querySelector('#removeAll')
const giphyContainer = document.querySelector('#giphyContainer')



searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    let searchTerm = searchInput.value;
    getGiphy();
    
    // Information pull
    async function getGiphy() {
        const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: "5xMhcrOsskyOD2to3qnc3dwAxZXefqZL"}});
        // API Key: 5xMhcrOsskyOD2to3qnc3dwAxZXefqZL
        let randomNum = Math.floor(Math.random()*(res.data.data.length));
        // When user submits form with a search request
        // DOM Update
        let giphyBox = document.createElement('div');
        let newGiphy = document.createElement('img');
        newGiphy.src = (res.data.data[randomNum].images.original.url);
        newGiphy.style.height='200px';
        newGiphy.style.width='200px';
        giphyBox.appendChild(newGiphy);
        giphyContainer.appendChild(giphyBox)
        console.log('something is happening!')
    }
    
});
;

removeAllBtn.addEventListener('click', function(e){
    e.preventDefault();
    while(giphyContainer.firstChild){
        giphyContainer.removeChild(giphyContainer.firstChild);
    }
})