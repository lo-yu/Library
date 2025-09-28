const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID(); 
}

function addBookToLibrary(title, author, pages, read){
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
    console.log(book);
}

const container = document.querySelector(".container");

let displayBooks = function(){
    myLibrary.forEach((item,i) => {
        if(i == myLibrary.length-1){
        //console.log(item);
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.innerHTML = `
        Title:  ${item.title}<br><br>
        Author: ${item.author}<br><br>
        Pages:  ${item.pages}<br><br>
        Read:   ${item.read}`;
        container.appendChild(card);
        }
    })
}

addBookToLibrary("Harry Potter", "J.K Rowling", 236, "Read");
displayBooks();
addBookToLibrary("Naruto", "Masashi Kishimoto", 2391, "Read");
addBookToLibrary("One piece", "Oda", 6891, "Read");
displayBooks();


let addButton = document.querySelector(".addBook");
let dialog = document.querySelector("dialog");

addButton.addEventListener("click", () => {
    dialog.showModal();
})

/*let submit = document.querySelector(".submit");
let input = document.querySelector("input");


submit.addEventListener("click", createBook);

let createBook = function(){
    addBookToLibrary();
    displayBooks();
}*/

