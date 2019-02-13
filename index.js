// get elements
const filmList = document.getElementById("filmList");

addFilmToUI();

// add film to UI
function addFilmToUI(){
    let films = getFromStorage();

    films.forEach(filmEl => {
        filmList.innerHTML += `
            <div class="col-lg-2 col-md-3 col-sm-4 col-6 card-film">
                <div class="card">
                    <img src="${filmEl.photoPath}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${filmEl.title}</h5>
                        <h6 class="film-type">Category: ${filmEl.category}</h6>
                    </div>
                    <div class="imdb-score">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        ${filmEl.imdbScore}/10
                    </div>
                    <a class="information" href="#">Details</a>
                </div>
            </div>
        `;
    });    
}