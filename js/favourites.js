import { getTheFav } from "./utils/favFunctions.js";
import clearButton from "./components/common/clearButton.js";

const favourites = getTheFav();

const articleContainer = document.querySelector(".article-container");

clearButton();

if (favourites.length === 0){
    
    articleContainer.innerHTML= "You have no favorites yet";
    clearBtn.style.display = "none";
}

favourites.forEach(favourite => {
    articleContainer.innerHTML += ` <div class="article">
                                        <h4>${favourite.title}</h4>
                                        <i class="fas fa-heart"></i>
                                    </div>`
});