// Show a list of movies
let listContainer = document.getElementById("list-container");
let list = document.getElementById("list");
let li = document.querySelector("item-collection");

let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let remove = document.querySelector("remove");

// Request to a json file
// WHAT WE SEE
const xhr = new XMLHttpRequest();
xhr.open("GET", "test-films.json", true);

xhr.onload = function () {
  if (this.status === 200) {
    try {
      response = JSON.parse(this.responseText);
      listOfMovies = response.results;
    } catch (err) {
      console.warn("There was an error in JSON. Could not parse");
    }

    listOfMovies.forEach(function (item, index, arr) {
      let list = document.getElementById("list");

      let li = document.createElement("li");
      li.className = "collection-item";
      li.innerHTML = `
      <div id="description">
        <h3><span class="spanInside">${
          listOfMovies[index].original_title
        }</span> (${listOfMovies[index].title})</h3>
        <h4>Original language:<span class="spanInside"> ${
          listOfMovies[index].original_language
        }</span></h4>
        <h5>The vote average for film: <span class="spanInside"> ${
          listOfMovies[index].vote_average
        }</span></h5>
        <p>Movie release date:<span class="spanInside"> ${new Date(
          listOfMovies[index].release_date
        ).toDateString()}</span></p>  
        <p class="plot"><span class="spanInside">Movie Plot:</span> ${
          listOfMovies[index].overview
        }</p>
      </div>
      
      `;

      list.appendChild(li);
    });
  } else {
    console.warn("Could not receive 200 OK from response");
  }
};
xhr.send();

// Modal

// Show a list of movies

list.addEventListener("click", showPopup);

function showPopup(e) {
  console.log(e);
  modal.style.display = "block";
  modal.innerHTML = `
  <div>${e.target.parentElement.innerHTML}</div>
 
  `;
}

// // Remove a list of movies

// remove.addEventListener("click", removePopup);

// function removePopup(e) {
//   let description = document.getElementById('description')
//   console.log(e);
//   console.log(description);
//   // modal.style.display = "none";
//   // modal.innerHTML = `  `;
// }
