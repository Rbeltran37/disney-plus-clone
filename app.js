// Move SLider

let sliderAuto = setInterval(sliderNext, 5000);

// Move To Next Slide

function sliderNext() {
    document.getElementById("slide0").id = "slide7"
    document.getElementById("slide1").id = "slide0"
    document.getElementById("slide2").id = "slide1"
    document.getElementById("slide3").id = "slide2"
    document.getElementById("slide4").id = "slide3"
    document.getElementById("slide5").id = "slide4"
    document.getElementById("slide6").id = "slide5"
    document.getElementById("slide7").id = "slide6"

    document.getElementById("slide2").appendChild(document.getElementById("slider-prev"))
    document.getElementById("slide4").appendChild(document.getElementById("slider-next"))

    moveCircleRight()

    if (document.getElementById("slide3").children[1].id === "slidetitle3" || document.getElementById("slide3").children[1].id === "slidetitle6") {
        document.getElementById("slide3").children[1].classList.remove("title-animation");
        void document.getElementById("slide3").children[1].offsetWidth;
        document.getElementById("slide3").children[1].classList.add("title-animation");
    }

    else if (document.getElementById("slide3").children[1].id != "slidetitle3" || document.getElementById("slide3").children[1].id != "slidetitle6") {
        document.getElementById("slide3").children[1].classList.remove("title-animation2");
        void document.getElementById("slide3").children[1].offsetWidth;
        document.getElementById("slide3").children[1].classList.add("title-animation2");
    }
}

function nextSlide() {
    clearInterval(sliderAuto);
    sliderNext();
    sliderAuto = setInterval(sliderNext, 5000);
}

// Move To Previous Slide

function sliderPrev() {
    document.getElementById("slide6").id = "slide7"
    document.getElementById("slide5").id = "slide6"
    document.getElementById("slide4").id = "slide5"
    document.getElementById("slide3").id = "slide4"
    document.getElementById("slide2").id = "slide3"
    document.getElementById("slide1").id = "slide2"
    document.getElementById("slide0").id = "slide1"
    document.getElementById("slide7").id = "slide0"

    document.getElementById("slide2").appendChild(document.getElementById("slider-prev"))
    document.getElementById("slide4").appendChild(document.getElementById("slider-next"))

    moveCircleLeft()

    if (document.getElementById("slide3").children[1].id === "slidetitle3" || document.getElementById("slide3").children[1].id === "slidetitle6") {
        document.getElementById("slide3").children[1].classList.remove("title-animation");
        void document.getElementById("slide3").children[1].offsetWidth;
        document.getElementById("slide3").children[1].classList.add("title-animation");
    }

    else if (document.getElementById("slide3").children[1].id != "slidetitle3" || document.getElementById("slide3").children[1].id != "slidetitle6") {
        document.getElementById("slide3").children[1].classList.remove("title-animation2");
        void document.getElementById("slide3").children[1].offsetWidth;
        document.getElementById("slide3").children[1].classList.add("title-animation2");
    }
}

function prevSlide() {
    clearInterval(sliderAuto);
    sliderPrev();
    sliderAuto = setInterval(sliderNext, 5000);
}

// Update Slide Circle

const circleList = document.getElementsByClassName("dark-circle")
var circleIndex = 0
circleList[circleIndex].style.backgroundColor = "#fff"

function moveCircleRight() {
    circleList[circleIndex].style.backgroundColor = "#bbb"
    circleIndex += 1

    if(circleIndex >= 7) {
        circleIndex = 0
        circleList[circleIndex].style.backgroundColor = "#fff"
    }

    else {
        circleList[circleIndex].style.backgroundColor = "#fff"
    }
}

function moveCircleLeft() {
    circleList[circleIndex].style.backgroundColor = "#bbb"
    circleIndex -= 1

    if(circleIndex <= -1) {
        circleIndex = 6
        circleList[circleIndex].style.backgroundColor = "#fff"
    }

    else {
        circleList[circleIndex].style.backgroundColor = "#fff"
    }
}

// Line Under Nav Text
function homeLine() {
    document.getElementById("home-underline").style.width = "56%"
    document.getElementById("home-underline").style.opacity = "1"
}

function homeLineNone() {
    document.getElementById("home-underline").style.width = "0%"
    document.getElementById("home-underline").style.opacity = "0"
}

function searchLine() {
    document.getElementById("search-underline").style.width = "65%"
    document.getElementById("search-underline").style.opacity = "1"
}

function searchLineNone() {
    document.getElementById("search-underline").style.width = "0%"
    document.getElementById("search-underline").style.opacity = "0"
}

function watchlistLine() {
    document.getElementById("watchlist-underline").style.width = "77%"
    document.getElementById("watchlist-underline").style.opacity = "1"
}

function watchlistLineNone() {
    document.getElementById("watchlist-underline").style.width = "0%"
    document.getElementById("watchlist-underline").style.opacity = "0"
}

function originalsLine() {
    document.getElementById("originals-underline").style.width = "72%"
    document.getElementById("originals-underline").style.opacity = "1"
}

function originalsLineNone() {
    document.getElementById("originals-underline").style.width = "0%"
    document.getElementById("originals-underline").style.opacity = "0"
}

function moviesLine() {
    document.getElementById("movies-underline").style.width = "65%"
    document.getElementById("movies-underline").style.opacity = "1"
}

function moviesLineNone() {
    document.getElementById("movies-underline").style.width = "0%"
    document.getElementById("movies-underline").style.opacity = "0"
}

function seriesLine() {
    document.getElementById("series-underline").style.width = "59%"
    document.getElementById("series-underline").style.opacity = "1"
}

function seriesLineNone() {
    document.getElementById("series-underline").style.width = "0%"
    document.getElementById("series-underline").style.opacity = "0"
}

// Play Video Cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// Next Button for movies 1

const movieList1 = document.getElementsByClassName("card")

function next() {
    document.getElementsByClassName("card-next")[0].style.display = "none"
    document.getElementsByClassName("card-prev")[0].style.display = "block"
    for (let item of movieList1) {
        item.style.right = "calc((500%/5 - 15px) + 40px)";
    }
}

function next2() {
    document.getElementsByClassName("card-next")[1].style.display = "none"
    document.getElementsByClassName("card-prev")[1].style.display = "block"
    for (let item of movieList1) {
        item.style.right = "calc((1000%/5 - 15px) + 60px)";
    }
}

// Previous Button for movies 1

function prev() {
    document.getElementsByClassName("card-next")[0].style.display = "block"
    document.getElementsByClassName("card-prev")[0].style.display = "none"
    for (let item of movieList1) {
        item.style.right = "0";
    }
}

function prev2() {
    document.getElementsByClassName("card-next")[1].style.display = "block"
    document.getElementsByClassName("card-prev")[1].style.display = "none"
    for (let item of movieList1) {
        item.style.right = "calc((500%/5 - 15px) + 40px)";
    }
}


// Next Button for movies 2

const movieList2 = document.getElementsByClassName("card2")

function next3() {
    document.getElementsByClassName("card-next2")[0].style.display = "none"
    document.getElementsByClassName("card-prev2")[0].style.display = "block"
    for (let item of movieList2) {
        item.style.right = "calc((500%/5 - 15px) + 40px)";
    }
}

function next4() {
    document.getElementsByClassName("card-next2")[1].style.display = "none"
    document.getElementsByClassName("card-prev2")[1].style.display = "block"
    for (let item of movieList2) {
        item.style.right = "calc((1000%/5 - 15px) + 60px)";
    }
}

// Previous Button for movies 2

function prev3() {
    document.getElementsByClassName("card-next2")[0].style.display = "block"
    document.getElementsByClassName("card-prev2")[0].style.display = "none"
    for (let item of movieList2) {
        item.style.right = "0";
    }
}

function prev4() {
    document.getElementsByClassName("card-next2")[1].style.display = "block"
    document.getElementsByClassName("card-prev2")[1].style.display = "none"
    for (let item of movieList2) {
        item.style.right = "calc((500%/5 - 15px) + 40px)";
    }
}

// Next Button for movies 3

const movieList3 = document.getElementsByClassName("card3")

function next5() {
    document.getElementsByClassName("card-next3")[0].style.display = "none"
    document.getElementsByClassName("card-prev3")[0].style.display = "block"
    for (let item of movieList3) {
        item.style.right = "calc((500%/5 - 15px) + 40px)";
    }
}

function next6() {
    document.getElementsByClassName("card-next3")[1].style.display = "none"
    document.getElementsByClassName("card-prev3")[1].style.display = "block"
    for (let item of movieList3) {
        item.style.right = "calc((1000%/5 - 15px) + 60px)";
    }
}

// Previous Button for movies 3

function prev5() {
    document.getElementsByClassName("card-next3")[0].style.display = "block"
    document.getElementsByClassName("card-prev3")[0].style.display = "none"
    for (let item of movieList3) {
        item.style.right = "0";
    }
}

function prev6() {
    document.getElementsByClassName("card-next3")[1].style.display = "block"
    document.getElementsByClassName("card-prev3")[1].style.display = "none"
    for (let item of movieList3) {
        item.style.right = "calc((500%/5 - 15px) + 40px)";
    }
}