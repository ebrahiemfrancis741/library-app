
const library = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book, library){
    library.push(book);
}

function addBooksToDOM(library){
    let bookContainer = document.querySelector(".book-container");
    let book;
    let bookInfoRow;
    let bookInfoLabel;
    let bookInfoValue;

    for(let i = 0; i < library.length; i++){
        book = document.createElement("div");
        book.classList = "book";
        bookContainer.appendChild(book);

        // row 1
        bookInfoRow = document.createElement("div");
        bookInfoLabel = document.createElement("span");
        bookInfoLabel.classList = "info-label"
        bookInfoLabel.textContent = "Title";
        bookInfoValue = document.createElement("span");
        bookInfoLabel.classList = "info-value"
        bookInfoValue.textContent = library[i].title;
        bookInfoRow.appendChild(bookInfoLabel);
        bookInfoRow.appendChild(bookInfoValue);
        book.appendChild(bookInfoRow);

        // row 2
        bookInfoRow = document.createElement("div");
        bookInfoLabel = document.createElement("span");
        bookInfoLabel.classList = "info-label"
        bookInfoLabel.textContent = "Author";
        bookInfoValue = document.createElement("span");
        bookInfoLabel.classList = "info-value"
        bookInfoValue.textContent = library[i].author;
        bookInfoRow.appendChild(bookInfoLabel);
        bookInfoRow.appendChild(bookInfoValue);
        book.appendChild(bookInfoRow);

        // row 3
        bookInfoRow = document.createElement("div");
        bookInfoLabel = document.createElement("span");
        bookInfoLabel.classList = "info-label"
        bookInfoLabel.textContent = "Pages";
        bookInfoValue = document.createElement("span");
        bookInfoLabel.classList = "info-value"
        bookInfoValue.textContent = library[i].pages;
        bookInfoRow.appendChild(bookInfoLabel);
        bookInfoRow.appendChild(bookInfoValue);
        book.appendChild(bookInfoRow);

        // row 4
        bookInfoRow = document.createElement("div");
        bookInfoLabel = document.createElement("span");
        bookInfoLabel.classList = "info-label"
        bookInfoLabel.textContent = "Read";
        bookInfoValue = document.createElement("span");
        bookInfoLabel.classList = "info-value"
        bookInfoValue.textContent = library[i].read;
        bookInfoRow.appendChild(bookInfoLabel);
        bookInfoRow.appendChild(bookInfoValue);
        book.appendChild(bookInfoRow);
    }
}

function main(){
    let a = new Book("best author1", "best title1best title1best title1best title1", 231, "no");
    let b = new Book("best author2", "best title2", 311, "yes");
    let c = new Book("best author3", "best title3", 411, "no");
    addBookToLibrary(a, library);
    addBookToLibrary(b, library);
    addBookToLibrary(c, library);

    addBooksToDOM(library);
    console.log(library);
}

main();