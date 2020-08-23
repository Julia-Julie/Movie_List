// Variable Declaration
let response,
  listOfMovies,
  arrMovieTitles = [];

let shownMovies = document.getElementById("movies");

// Request to a json file
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

    // What You see at first
    listOfMovies.filter(function (item, index, arr) {
      if (index < 8) {
        let movie = document.createElement("div");
        movie.className = "movie";

        let movieImgDiv = document.createElement("div");
        let movieImg = document.createElement("img");
        movieImg.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/w500/${listOfMovies[index].poster_path}`
        );
        movieImgDiv.appendChild(movieImg);

        let movieText = document.createElement("div");
        movieText.innerHTML = `
      <h4>${listOfMovies[index].title}</h4>
      
      <p>${new Date(listOfMovies[index].release_date).toDateString()}</p>  
      `;
        movie.appendChild(movieImgDiv);
        movie.appendChild(movieText);

        shownMovies.appendChild(movie);
      }
    });
  } else {
    console.warn("Could not receive 200 OK from response");
  }
};
xhr.send();

// SORT

// Show Popular movies
let sort1 = document.getElementById("sort1");
sort1.addEventListener("click", showPopular);
function showPopular(event) {
  // Request to a json file
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
      console.log(listOfMovies);

      listOfMovies.forEach(function (item, index, arr) {
        let showPopArray = `${listOfMovies[index].popularity}`;
        console.log(showPopArray);

        let movies2 = document.getElementById("movies2");
        let movies = document.getElementById("movies");

        movies.innerHTML = "";

        let div = document.createElement("div");
        div.className = "collection-div";

        let text = document.createElement("div");
        text.innerHTML = `
        <p>${listOfMovies[index].popularity}</p>
        <i class="far fa-thumbs-up fa-3x"></i>
        <h2>${listOfMovies[index].original_title}</h2>
        `;

        div.appendChild(text);

        movies2.appendChild(div);
      });
    } else {
      console.warn("Could not receive 200 OK from response");
    }
  };
  xhr.send();
  event.preventDefault();
}

// Show Newest movies
let sort2 = document.getElementById("sort2");
sort2.addEventListener("click", showNewest);
function showNewest(event) {
  // Request to a json file
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
      console.log(listOfMovies);

      listOfMovies.forEach(function (item, index, arr) {
        let movies3 = document.getElementById("movies3");

        movies.innerHTML = "";

        let div = document.createElement("div");
        div.className = "collection-div";

        let time = new Date(listOfMovies[index].release_date);

        let month = time.toLocaleString("default", { month: "long" });
        console.log(month);

        let year = time.getFullYear();
        console.log(year);

        let text = document.createElement("div");
        text.innerHTML = `
        <p>${month}, ${year}  </p>
        
        <i class="fas fa-bell fa-3x"></i>
        <h2>${listOfMovies[index].title}</h2>
        `;

        div.appendChild(text);

        movies3.appendChild(div);
      });
    } else {
      console.warn("Could not receive 200 OK from response");
    }
  };
  xhr.send();
  event.preventDefault();
}

// Show More Movies
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", showMore);
function showMore(event) {
  // Request to a json file
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
      console.log(listOfMovies);

      listOfMovies.filter(function (item, index, arr) {
        if (index < 12) {
          var movie = document.createElement("div");
          movie.className = "movie";

          let movieImgDiv = document.createElement("div");
          let movieImg = document.createElement("img");
          movieImg.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${listOfMovies[index].poster_path}`
          );
          movieImgDiv.appendChild(movieImg);

          let movieText = document.createElement("div");
          movieText.innerHTML = `
        <h4>${listOfMovies[index].title}</h4>
        
        <p>${new Date(listOfMovies[index].release_date).toDateString()}</p>  
        `;
          movie.appendChild(movieImgDiv);
          movie.appendChild(movieText);

          shownMovies.appendChild(movie);
        }
      });
    } else {
      console.warn("Could not receive 200 OK from response");
    }
  };
  xhr.send();
  event.preventDefault();
}

// Show all movies
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", showAllMovies);
function showAllMovies(event) {
  // Request to a json file
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
      console.log(listOfMovies);

      listOfMovies.forEach(function (item, index, arr) {
        let movie = document.createElement("div");
        movie.className = "movie";

        let movieImgDiv = document.createElement("div");
        let movieImg = document.createElement("img");
        movieImg.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/w500/${listOfMovies[index].poster_path}`
        );
        movieImgDiv.appendChild(movieImg);

        let movieText = document.createElement("div");
        movieText.innerHTML = `
       <h4>${listOfMovies[index].title}</h4>
       
       <p>${new Date(listOfMovies[index].release_date).toDateString()}</p>  
       `;
        movie.appendChild(movieImgDiv);
        movie.appendChild(movieText);

        shownMovies.appendChild(movie);
      });
    } else {
      console.warn("Could not receive 200 OK from response");
    }
  };
  xhr.send();
  event.preventDefault();
}

// // Filter films
const search = document.getElementById("search");
const movies = document.getElementById("movies");

// Search movies.json and filter it
search.addEventListener("keyup", () => searchMovies(search.value));

const searchMovies = async (searchText) => {
  const resp = await fetch("test-films.json");
  const resp2 = await resp.json();
  const films = resp2.results;

  // Get matched to current text input
  let matches = films.filter((film) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    let filmOrigTitle = film.original_title;
    let filmTitle = film.title;
    return filmOrigTitle.match(regex) || filmTitle.match(regex);
  });
  console.log(matches);

  // Show results in html
  outHTML(matches);
};

const outHTML = (matches) => {
  if (matches.length > 0) {
    const movies4 = document.getElementById("movies4");
    const movies = document.getElementById("movies");
    movies.innerHTML = "";
    const html = matches
      .map(
        (match) => `
<div id="foundMovies">
  <div class="container">
    <div class='foundMovie'>
      <div>
        <h4>${match.title}</h4> 
        <p>${new Date(match.release_date).toDateString()}</p>
      </div>
      <div> <img src="https://image.tmdb.org/t/p/w500/${
        match.poster_path
      }" alt=""></div>
    <div>
  </div>
</div>
    
    `
      )
      .join("");
    movies4.innerHTML += html;
  }
};
