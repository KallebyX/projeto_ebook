document.addEventListener("DOMContentLoaded", function() {
    const bookViewer = document.getElementById("book-viewer");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");

    const book = ePub("ebook.epub"); 

    bookViewer.appendChild(book.renderTo("viewer"));

    prevPageButton.addEventListener("click", function() {
        book.prevPage();
    });

    nextPageButton.addEventListener("click", function() {
        book.nextPage();
    });
});
