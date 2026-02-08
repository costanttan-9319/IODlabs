// Column 1 button
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
    const column1 = document.getElementById("column1");
    const heading1 = document.getElementById("heading1");

    // Change heading text
    heading1.innerText = "Hello Changed!";

    // Change background color
    column1.style.backgroundColor = "lightblue";
});

// Column 2 button
const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", () => {
    const column2 = document.getElementById("column2");
    const heading2 = document.getElementById("heading2");

    // Change heading text
    heading2.innerText = "World Changed!";

    // Change background color
    column2.style.backgroundColor = "lightgreen";
});