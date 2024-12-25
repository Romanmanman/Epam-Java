document.addEventListener("DOMContentLoaded", () => {
    const bookList = [
        { title: "1984", author: "George Orwell" },
        { title: "To Kill a Mockingbird", author: "Harper Lee" },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
        { title: "Moby Dick", author: "Herman Melville" },
    ];

    const searchInput = document.getElementById("search");
    const bookListElement = document.getElementById("bookList");

    function renderBooks(books) {
        bookListElement.innerHTML = "";
        books.forEach((book) => {
            const li = document.createElement("li");
            li.textContent = `${book.title} by ${book.author}`;
            bookListElement.appendChild(li);
        });
    }

    function handleSearch(event) {
        const query = event.target.value.toLowerCase();
        const filteredBooks = bookList.filter(
            (book) =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query)
        );
        renderBooks(filteredBooks);
    }

    searchInput.addEventListener("input", handleSearch);

    // Initial render
    renderBooks(bookList);
});
