export function getTheFav() {

    const favs = localStorage.getItem("favourites");
 
 
    if(!favs) {
        return [];
    } else {
        return JSON.parse(favs);
    }
 }