let searchForm = document.getElementById("search-form"); // search-form is very important for getting data with input field with enter button , also click on search button that's why we are writing form 

let searchBox = document.getElementById("search-box"); 
let searchBtn =document.getElementById("search-btn");
let  searchResultShow = document.getElementById("search-result-show");
let showMoreBtn = document.getElementById("show-more-btn");

// console.log(searchBox.innerHTML);
// 4KOcr-9-WIS8Ie2dJz-vmwLWG0f4mqwBfsn2jT6fxvs
let apiAccessKey = '4KOcr-9-WIS8Ie2dJz-vmwLWG0f4mqwBfsn2jT6fxvs';
// let apiUrl = `https://api.unsplash.com/search/photos?page=1&query=tree&client_id=4KOcr-9-WIS8Ie2dJz-vmwLWG0f4mqwBfsn2jT6fxvs`;
let page = 1;
async function showResult(){
    let keyword = searchBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=${apiAccessKey}`;
    let response = await fetch(url);
    let data  = await response.json();
    console.log("apiData",data.results);
    if(page ==1){
        searchResultShow.innerHTML='';
    }
    // let imgArr = data.results.urls.small
    for(let img of data.results){
        let imgElem = document.createElement('img');
        // imgElem.classList("demoClass");
        imgElem.classList.add("show-result-img")
        imgElem.src = img.urls.small;
        searchResultShow.appendChild(imgElem);
    }  

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    showResult();        
})
showMoreBtn.addEventListener("click",()=>{
    page++;
    showResult();
})
