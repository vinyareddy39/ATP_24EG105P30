
    class Book 
    {
      title ; 
      author ;
      pages ;
      isAvailable = true ; // default it is set as true 
       constructor (title , author , pages )
       {
        this.title = title
        this.author = author
        this.pages = pages
       }
    
      borrow() 
      {
        if (this.isAvailable == true)
        {
          return this.isAvailable = false 
        }
      }
      // - Marks the book as not available
      returnBook() 
      {
        return this.isAvailable = true 
      }
      //  - Marks the book as available
      getInfo() {
          return console.log(`the title  is${this.title} and author is${this.author} the pages  ${this.pages} the availablity  ${this.isAvailable}`)
      } // - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() {
        //  - Returns true if pages > 300, false otherwise
         if(this.pages > 300)
         {
          return " long pages "
         }return false 
        }
         allAvailableBooks()
         {
          if(this.isAvailable == true )
          {
            return console.log(` the availablity of books the title  is${this.title} and author is${this.author} the pages  ${this.pages} the availablity  ${this.isAvailable}`)
          }
         }

    
  }
   // i. Display info of all books
let books = new Book("the lion "," lisa " , 308)
let books1 = new Book (" pride "," mia " , 789)
let books2 = new Book("the tiger "," vidya  " , 400)
let books3 = new Book ("  the cheetah  "," kapoor " , 230)
let books4 = new Book ("  the peacock  "," ranbir " , 2300) 
books.getInfo ()
books1.getInfo()
 books2.getInfo ()
 books3.getInfo ()
books4.getInfo()
      // ii. Borrow 2 books and show their availability status
     console.log( "the avaliabilty of book of 1st",books.borrow())
     console.log ("the availabilty of book of 2nd ",books1.borrow())
     books.getInfo ()
    books1.getInfo()

      // iii. Return 1 book and show updated status
      books.returnBook()
         books.getInfo ()
      // iv. Count how many books are "long books" (more than 300 pages)
     console.log( "is the book of pages is more then 300",books.isLongBook())

      // v. List all available books
   books.allAvailableBooks()