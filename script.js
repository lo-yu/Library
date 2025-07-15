const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return "The " + this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    };
}

const book1 = new Book('Harry Poter', 'JK Rowling', 338, 'read');
const book2 = new Book('Naruto', 'Kishimoto', 1903, 'read');

function addBookToLibrary(item){
    const id = crypto.randomUUID();
    myLibrary.push(item);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary);

for( i = 0; i < myLibrary.length; i++ ){
    console.log(myLibrary[i],i);
}