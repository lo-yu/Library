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
    container.innerHTML = "";
    myLibrary.forEach((item,i) => {
        //console.log(item);
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id = item.id;
        card.innerHTML = `
        Title:  ${item.title}<br><br>
        Author: ${item.author}<br><br>
        Pages:  ${item.pages}<br><br>
        Read:   ${item.read}<br><br>
        <Button class="remove-button">Remove</Button>`;
        container.appendChild(card);
        

    })
}

/*addBookToLibrary("Harry Potter", "J.K Rowling", 236, "Read");
displayBooks();
addBookToLibrary("Naruto", "Masashi Kishimoto", 2391, "Read");
addBookToLibrary("One piece", "Oda", 6891, "Read");
displayBooks();*/


let addButton = document.querySelector(".addBook");
let dialog = document.querySelector("dialog");

addButton.addEventListener("click", () => {
    dialog.showModal();
})

let form = document.querySelector("#myForm");
let button = document.querySelector(".submit");


form.addEventListener("submit", (event) => {
    let titleInput = document.querySelector("#title").value;
    let authorInput = document.querySelector("#author").value;
    let pagesInput = document.querySelector("#pages").value;
    let readInput = document.querySelector("#read").value;

    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
    displayBooks();
    event.preventDefault();
    dialog.close();
    form.reset();
    /*form.style.display = "none";*/

})

/*button.addEventListener("click", addBookToLibrary)*/

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-button")) {
        const card = e.target.closest(".book-card");
        const id = card.dataset.id;

        const index = myLibrary.findIndex(book => book.id === id);
        if (index !== -1) {
            myLibrary.splice(index, 1);
        }

        displayBooks();
    }
});
