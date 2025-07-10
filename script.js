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

console.log(book1.info());
console.log(book1.title);