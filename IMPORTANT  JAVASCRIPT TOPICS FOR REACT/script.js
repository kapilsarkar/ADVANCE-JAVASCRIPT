const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }

  //PART-1 DESTRUCTURING OBJECT AND ARRAYS---

  const book = getBook(2)
  console.log(book)
 //OBJECT DESTRUCTURING
 const {title,author,genres} = book
 console.log(`Author is :${author} and the title of the book is: ${title}`)
 console.log(genres)
//ARRAY DESTRUCTURING
 const [primaryGenre] = genres
 console.log(primaryGenre)

 //PART-2 REST/SPREAD OPERATOR
//REST OPERATOR FOR ARRAYS
 const [...otherGenres] = genres
 console.log(otherGenres)

 //SPREAD OPERATOR FOR ARRAYS
 const newGenres =[...genres]
 console.log(newGenres)

 //REST/ SPREAD OPERATOR IN CASE OF OBJECTS

 const updatedBook = {...book,
  //adding a new property
  moviePublicationDate:'2010-10-5',
  //overwriting the existing property
  pages:300}
 console.log(updatedBook)

 //PART-3 OPTIONAL CHAINING
 
 function getTotalReviewCount(book){
  const goodReads = book.reviews.goodReads?.reviewsCount
  const libraryReading = book.reviews.libraryreading?.reviewsCount
  return goodReads + libraryReading
 }

 console.log(getTotalReviewCount(book))

 //Ternary Operator---
  let pg= 500
 const pagesRange = pg > 1000 ? "Mor than Thousand" : "Less than Thousand"
 console.log(pagesRange)

 //map()

 const bk = getBooks()

 const onlyTitle = bk.map((e)=>{
  return e.title
 })

 console.log(onlyTitle)

 const essentialData = bk.map((e)=>{
  return `title:${e.title} and author:${e.author}`
 })
 console.log(essentialData)

 //filter()

 const longBooks = bk.filter((e)=>{
   return e.pages > 500
 })

 console.log(longBooks)

 const adventureBooks = bk.filter((e)=>{
  return e.genres.includes("adventure")
 }).map((e)=>{
  return e.title
 })

 console.log(adventureBooks)

 //reduce()

 const pagesAllBooks = bk.reduce((cr,nw)=>{
  return cr + nw.pages
 },0)
 console.log(pagesAllBooks)


//sort()

const x = [2,5,9,10,20]

const sorted =x.slice().sort((a,b)=> `Ascending Order ${b-a}`
 )
console.log(sorted)

const sortedByPages = bk.slice().sort((a,b)=> a.pages-b.pages)
console.log(sortedByPages)

//Immutable Arrays

//Add a book object to array---

const newBook = {
  id:6,
  title:"Shaktimaan",
  author:"Kapil Sarkar",
}

const booksAfterAdd = [...bk,newBook]
console.log(booksAfterAdd)

//Delete a book object from array---

const bookAfterDelete = booksAfterAdd.filter((e)=>{
  return e.id!==3
})

console.log(bookAfterDelete)

//Update a book object form array---

const booksAfterUpdate = bookAfterDelete.map((e)=>{
  return e.id === 1 ? {...bk,pages:900} : bk
})

console.log(booksAfterUpdate)

//Promise and async await



