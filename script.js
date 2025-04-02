const libraryData = {
    "The Great Gatsby": "Aisle 3, Shelf 2",
    "To Kill a Mockingbird": "Aisle 1, Shelf 4",
    "1984": "Aisle 5, Shelf 1",
    "Moby Dick": "Aisle 2, Shelf 3",
    "Pride and Prejudice": "Aisle 4, Shelf 2"
};

function findBook() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!searchInput) {
        resultDiv.innerHTML = "Please enter a book name.";
        return;
    }

    const location = libraryData[searchInput];

    if (location) {
        resultDiv.innerHTML = 📍 <strong>${searchInput}</strong> is located at: <br> <strong>${location}</strong>;
    } else {
        resultDiv.innerHTML = "❌ Book not found. Try a different name.";
    }
}