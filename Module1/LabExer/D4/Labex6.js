//Creating the book: title, description, author, num of pages
let book = {
    title: "The Great Wall",
    description: "A documentation of the construction of The Great Wall of China", 
    author : "John Smith",
    numOfPages: 338
};

//printing object values in console individually (1) and via whole book object (2)
//Printing objects property values individually (1)
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.numOfPages);


//Printing whole book object
console.log(book);

//Update of book description
book.description = "Update: A tale of the secret chambers of the Great Wall.";

//Print updated book description
console.log(book.description);


//Extension: Create an array of 5 book objects
let library = [
    {title: "The Great Wall",
    description: "A documentation of the construction of The Great Wall of China", 
    author : "John Smith",
    numOfPages: 338},

    {title: "The 3 little pigs",
    description: "A classical bedtime story", 
    author : "Candy Lim",
    numOfPages: 200},

    {title: "The 3 little pigs",
    description: "A classical bedtime story", 
    author : "Candy Lim",
    numOfPages: 200},

    {title: "Harry Potter",
    description: "Journey of a young wizard who becomes the best", 
    author : "Henry Goth",
    numOfPages: 1023},

    {title: "The Apple Store",
    description: "Biography of how Steve Jobs founded Apple", 
    author : "James Watson",
    numOfPages: 678}
];

//Print arrays
console.log(library);


//final version