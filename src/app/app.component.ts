import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  rentalList = {
    count: 1,
    titles: "Cats"
  }

  wingCommander = {
		"title": "Wing Commander",
		"year": 1999,
		"stars": 4.3,
		"rating": "PG-13",
		"director": "Chris Roberts",
		"cast": ["Freddie Prinze Jr.", "Matthew Lillard", "Saffron Burrows"],
		"imdblink": "https://www.imdb.com/title/tt0131646/",
		"image": "/assets/images/wing-commander.jpg",
		"imageUrl": "https://m.media-amazon.com/images/M/MV5BMTc1MDI1MDMyN15BMl5BanBnXkFtZTcwMzgzMTIyMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg"
	}

  catwoman = {
		"title": "Catwoman",
		"year": 2004,
		"stars": 3.4,
		"rating": "PG-13",
		"director": "Pitof",
		"cast": ["Halle Berry", "Sharon Stone", "Benjamin Bratt"],
		"imdblink": "https://www.imdb.com/title/tt0327554/",
		"image": "/assets/images/catwoman.jpg",
		"imageUrl": "https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
	}

  onRentMovie(movie) {
    console.log('movie rented' + movie.title);
    this.rentalList.count++;
    this.rentalList.titles += ", " + movie.title;
  }

  onClearRentalList() {
    this.rentalList.count = 0;
    this.rentalList.titles = "";
  }
}
