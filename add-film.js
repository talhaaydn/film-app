// Film Constructor
function Film(title, category, imdbScore, photoPath){
    this.title = title;
    this.category = category;
    this.imdbScore = imdbScore;
    this.photoPath = photoPath;
}

// get elements
const addFilmForm = document.getElementById("addFilmForm");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const imdbScoreInput = document.getElementById("imdbScore");
const photoPathInput = document.getElementById("photoPath");

// submit eventlistener
addFilmForm.addEventListener("submit", e => {
    let title = titleInput.value;
    let category = categoryInput.value;
    let imdbScore = imdbScoreInput.value;
    let photoPath = photoPathInput.value;

    let newFilm = new Film(title, category, imdbScore, photoPath);
    addToStorage(newFilm);
    clearForm();

    e.preventDefault();
});

// new film add to storage
function addToStorage(newFilm){
    let films = getFromStorage();
    films.push(newFilm);
    localStorage.setItem("films", JSON.stringify(films));
}

// get all films from storage
function getFromStorage(){
    let films;
    if(localStorage.getItem("films") === null) films = [];
    else films = JSON.parse(localStorage.getItem("films"));
    return films;
}

// clear form
function clearForm(){
    titleInput.value = "";
    categoryInput.value = "";
    imdbScoreInput.value = "";
    photoPathInput.value = "";
}