var getInp = document.querySelector('#inp')

function search(){
    fetch(`https://newsapi.org/v2/everything?q=${getInp.value}&from=2024-05-07&sortBy=publishedAt&apiKey=1106cab34207493cb2f168c2111e6ce9`)
    .then(function(data){
       return data.json()
    })

    .then(function(data){
        var getDiv = document.getElementById('show')

        for (var i=0;   i < data.articles.length ; i++ ){
            getDiv.innerHTML += `<div class="card" style="width: 18rem;">
  <img src=${data.articles[i].urlToImage ? data.articles[i].urlToImage : 'https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png'} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.articles[i].title}</h5>
    <p class="card-text">${data.articles[i].description}</p>
    <p class="card-text">${data.articles[i].content}</p>
  </div>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
        }
    })
    .catch(function(err){
        console.log(err)
    })
}
