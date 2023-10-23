const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote 1
//"--- wrote --- in ---"
const authorbooklist = books.map(book => `${book.authorFirst} ${book.authorLast} wrote ${book.name}`);
console.log("Authors and their books:");
console.log(authorbooklist);
//Sort books from oldest to most recent 2
const sortedbyyear= books.sort((a,b) => a.publishDate - b.publishDate);
console.log("books oldest to most recent: ");
console.log(sortedbyyear);
//sort books alphabetically 3
const sortedalphabetically = books.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted alpgabetically:")
console.log(sortedalphabetically)
//Find who wrote War and Peace 4
const findauthor = books.find(book => book.name === "War and Peace");
console.log(`The author of war and peace: ${findauthor.authorFirst} ${findauthor.authorLast}`);
//how many books were written before 1900? 5
const booksbefore = books.filter(book => books.publishDate < 1900).length;
console.log(`number of books written before 1900: ${booksbefore}`);
//was there at least one book published within the last 100 years? 6
const currentyear = new Date().getFullYear();
const bookpublishediwithin = books.some(book => currentyear - book.publishDate <= 100);
console.log(`Were there books published within 100 years: ${bookpublishediwithin}`);
//was every book published within the last 100 years? 7
const waseverybook = books.every(book => currentyear - book.publishDate <= 100);
console.log(`Every book was published within the last 100 years: ${waseverybook}`);
//print a list of books that "includes" the genre historical 8
const historicalbooks = books.filter(book => book.genre.includes("historical")).map(book => book.name);
console.log("History books:");
console.log(historicalbooks)
