
// const Api="https://catfact.ninja/fact";

async function fetchDat() {
  try {
    const responce = await fetch("https://catfact.ninja/fact/");
    const data = await responce.json();
    // console.log(data.fact);
    return data.fact;
  }
  catch (error) {  
    console.log("galat hai ", error);
  }
}

fetchDat();

fetchDat().then(fact => {
  if (fact) {
    let Title = document.createElement("h3");
   let Kush=document.getElementById("kushvi");
    Title.style.padding="40px";
    // Title.style.border="2px  solid pink"
    Title.style.borderRadius="12px"
    Title.style.color=" white";
    Title.style.margin=" 0px 400px 20px 400px";
    // Title.style.margin='100px'
    Title.style.textShadow="0.5px 0.5px pink"
    Title.innerText = fact;
    // document.body.appendChild(Title);
    Kush.appendChild(Title);
  } else {
    console.log("No fact available");
  }
});

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
      catImgEl.setAttribute('src',`${catsImgUrl}`);
      catImgEl.setAttribute('src',`${catsImgUrl}`);
      catImgEl.setAttribute('height','400');
      catImgEl.setAttribute('width','600');
      let catsImgDiv = document.querySelector(".photo")
      catsImgDiv.appendChild(catImgEl);
  })
  .catch (err=>console.log(err))
}

fetchPics()
