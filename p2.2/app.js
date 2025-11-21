let myMovie = {Title: "The Longest day", Year: 1964};
console.log(myMovie);

myMovie.rating = 5;
myMovie.Summary = "Summary: World War II movie about the Normandy landings";

console.log(myMovie);

myMovie.rating = 5;
myMovie.Summary = "Summary: World War II movie about the Normandy landings";

console.log(myMovie);

myMovie.rating = 4;
myMovie.Year = 1962;
console.log(myMovie);

delete myMovie.Summary;
console.log(myMovie);
