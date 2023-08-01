
function getComic() {
    const baseUrl = 'https://xkcd.com/';
    const comicNo = Math.floor(Math.random() * 2775) + 1; //randomly choosing comic 
    const imgUrl = `${baseUrl}${comicNo}/info.0.json`;
  
    fetch(imgUrl)              //http response          
      .then((response) => response.json())   //extracts JSON data from response   
      .then((data) => {         // takes the JSON data and then selects the <img> element 
        const comicImg = document.getElementById('comic-img');
        comicImg.src = data.img;
      })
      .catch((error) => console.error('Error fetching comic:', error));  //handling errors
  }
  
  document.addEventListener('DOMContentLoaded', getComic); //calls getComic() when HTML document is fully loaded and parsed
