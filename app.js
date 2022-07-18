'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actor: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
  b = prompt('На сколько вы его оцениваете?'),
  cinema = prompt('Один из последних просмотренных фильмов?', ''),
  d = prompt('На сколько вы его оцениваете?');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[cinema] = d;
console.log(personalMovieDB);
