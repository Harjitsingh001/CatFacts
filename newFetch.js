

function fetchPics(){
  let catsImgDiv = document.querySelector(".photo")
  catsImgDiv.innerHTML='';
  fetch("https://api.thecatapi.com/v1/images/search") .then(
  (response)=>
   response.json()
  )
  .then ((data) => {
      let catsImgUrl=data[0].url;
      let catImgEl = document.createElement("img")
      catImgEl.setAttribute('src',`${catsImgUrl}`)
      catImgEl.classList.add("showcase")
      let catsImgDiv = document.querySelector(".photo")
      catsImgDiv.appendChild(catImgEl);
  })
  .catch (err=>console.log(err))
}

fetchPics()