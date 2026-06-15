function searchWallpaper() {

    let input = document.getElementById("searchInput").value.toUpperCase();

    let cards = document.getElementsByClassName("wallpaper-card");

    for(let i = 0; i < cards.length; i++) {

        let title = cards[i].getElementsByTagName("h5")[0];

        if(title.innerHTML.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        }
        else {
            cards[i].style.display = "none";
        }

    }

}