import { baseURL } from "./constants/api.js";
import displayMessage from "./components/common/displayMessage.js";
import { getTheFav } from "./utils/favFunctions.js";





const articlesURL = baseURL + "articles";

const favourites = getTheFav();


(async function () {

    const articleContainer = document.querySelector(".article-container");

    try{
        const response = await fetch(articlesURL);
        const articles = await response.json();


        articleContainer.innerHTML = "";

        console.log(articles);


        articles.forEach(function (article) {

            


            let heartClass = "far";

            const doesHeartExist = favourites.find(function(fav){
                console.log(fav)
                return parseInt(fav.id) === article.id
            })

            console.log(doesHeartExist);

            if(doesHeartExist){
                heartClass= "fas"
            }

            articleContainer.innerHTML += `<div class="article">
                                        <h4>${article.title}</h4>
                                        <p>${article.summary}</p>
                                        <p>${article.author}</p>
                                        <i class="${heartClass} fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
                                    </div>`;                
        });

        //filter



        //fav

        const favButton = document.querySelectorAll(".article i");

        console.log(favButton)

        favButton.forEach((button) => {
            button.addEventListener("click", handleClick)
        });


    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".article-container");
    }

}) ();

function handleClick(){
    // console.log(event);

    this.classList.toggle("fas");
    this.classList.toggle("far");

    const id= this.dataset.id;
    const title= this.dataset.title;

    // console.log("title", title);

    const currentFavs = getTheFav();

    const articleExists = currentFavs.find(function(fav) {
        return fav.id === id;
    })

    if(!articleExists) {

        const article = {id: id, title: title };
        currentFavs.push(article);
        saveFavs(currentFavs);
    }
    else {
        const newFavs = currentFavs.filter(fav => fav.id !== id);
        saveFavs(newFavs);
    }


}

function saveFavs(favs){
    localStorage.setItem ("favourites", JSON.stringify(favs));
}



