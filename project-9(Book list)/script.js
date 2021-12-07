// // Get the UI elements
// let form = document.querySelector('#book-form');

// let booklist = document.querySelector('#book-list');

// // Book class
// // aitake class constructor bole
// class Book {
//     constructor(title, author, isbn){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// // UI Class
// class UI{
//     constructor(){

//     }

//    static addToBookList(book){
//         let list = document.querySelector('#book-list');
//         let row = document.createElement('tr');
//         row.innerHTML = `
//         <td> ${book.title} </td>
//         <td> ${book.author} </td>
//         <td> ${book.isbn} </td> 
//         <td> <a href="#" class ="delete">X</a> </td>
        
//         `
//       list.appendChild(row);
//     }
//     // ait function ta form er value guloke clear korar jonno jokhon submit hoye jabe tokhon clear hoye jabe...
//     static clearField(){
//         document.querySelector("#title").value="";
//         document.querySelector("#author").value="";
//         document.querySelector("#isbn").value="";

//     }

//     static showAlert(message, className){ //2ta jinish received kora hoice, akta message arekta class name........

//         let div = document.createElement("div");
//         div.className = `alert ${className}` ; // alert holo classname, r className jeta seta niche thek jei err classname pathano hoice setai...

//         div.appendChild(document.createTextNode(message)); //div er vitore message take send kora holo...

//         let container =document.querySelector(".container");
//         let form =document.querySelector("#book-form");

//         container.insertBefore(div, form); // atar mane holo div ke add korbo container er vitor form er age..

//         setTimeout(() => {
//             document.querySelector(".alert").remove();
//         },3000)

//     }

//     static deleteFromBook(target) {
//         if (target.hasAttribute('href')) {
//             target.parentElement.parentElement.remove();
            
//             Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());//aita kora hoice jno ui and localstorage thekew delete hoye jay..

//             UI.showAlert('Book Removed!', 'success');
//         }
//     }

// }


// // ........local storage class methods.......

// class Store {

//     static getBooks(){
//         let books;
//         if(localStorage.getItem('books') === null){
//             books=[];
//         }else{
//             books = JSON.parse(localStorage.getItem('books'));
//         }
//         return books;
//     } 

 
//     static addBook(book){
//         let books  = Store.getBooks();
//         books.push(book);

//         localStorage.setItem('books', JSON.stringify(books));
//     }

//     static displayBooks() {
//         let books = Store.getBooks();

//         books.forEach(book => {
//             UI.addToBookList(book);
//         });
//     }

//     static removeBook(isbn){
//         let books = Store.getBooks();
//          books.forEach((book,index) => {
//              if(book.isbn === isbn){
//                  books.splice(index, 1);
//              }
//          })

//         // DELETE houar por localstorage a abar update kore deyar jonno...
//          localStorage.setItem('books', JSON.stringify(books));
//     }
// }





// //..........Add event listener.........

// form.addEventListener('submit', newBook);// jokhon form submit kora hobe tokhon newBook name a akta function create hobe...
// booklist.addEventListener('click', removeBook);
// document.addEventListener('DOMContentLoaded', Store.displayBooks()); // atar kaj holo jokhon reload kora hobe tokhon localStorage a thaka item display te show korbe..




// // ..........Define functions.............

// function newBook(e){
//    let title = document.querySelector("#title").value,
//    author= document.querySelector("#author").value,
//    isbn= document.querySelector("#isbn").value;

//     let ui = new UI();

//     if(title===''|| author===''|| isbn===''){

//         ui.showAlert("Please fill all the fields", "error"); //akta message arekta class name

//     }else{

//         let book = new Book(title, author, isbn);
   
      
//         ui.addToBookList(book);
//         ui.clearField();

//         ui.showAlert("Book Added Successfully", "success");


//         Store.addBook(book);
//     }


//     e.preventDefault(); //aita deya hoice jno console a form ta bar bar refresh na ney
// }




// function removeBook(e) {
//     UI.deleteFromBook(e.target);
//     e.preventDefault();
// }



// Get the UI elements
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');


// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
class UI {
    static addToBooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><i href='#' class=" fas fa-trash-alt"></i></td>`;

        
        list.appendChild(row);

    }

    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    static deleteFromBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAlert('Book Removed!', 'success');
        }
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = Store.getBooks();

        books.forEach(book => {
            UI.addToBooklist(book);
        });
    }

    static removeBook(isbn) {
        let books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Add Event Listener
form.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());


// Define functions

function newBook(e) {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;



    if (title === '' || author === '' || isbn === '') {

        UI.showAlert("Please fill all the fields!", "error");
    } else {

        let book = new Book(title, author, isbn);

        UI.addToBooklist(book);

        UI.clearFields();

        UI.showAlert("Book Added!", "success");

        Store.addBook(book);
    }




    e.preventDefault();
}

function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}


















    // if(title===''|| author===''|| isbn===''){

    //         let success = document.querySelector(".message");
    //         success.style.background="blue";
    //         success.style.color="white";
    //         success.innerHTML = "fill up all form";
    // }
    // else{
    //         let err = document.querySelector(".message");
    //         err.style.background="green";
    //         err.style.color="white";
    //         err.innerHTML = "success"; 

    //         let book = new Book(title, author, isbn);
   
    //         let ui = new UI();
    //         ui.addToBookList(book);
         
    //         ui.clearField();
       
    // }

    //     setTimeout(function(){
    //         document.querySelector(".message").remove();
    //     },3000)