export default function clearButton () {
    const clearBtn = document.querySelector("#clear");

    clearBtn.addEventListener("click", clearFavs);

    function clearFavs(){

        if(confirm("Are you sure you want to clear your favorites?")){
            localStorage.clear();

            clearBtn.style.display = "none";

            const articleContainer = document.querySelector(".article-container");
            articleContainer.innerHTML= "You have no favorites yet";
        }
    }
}