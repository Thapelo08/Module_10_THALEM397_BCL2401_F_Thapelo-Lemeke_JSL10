document.addEventListener("DOMContentLoaded", () => {
    // Event listener for solving Room 1
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // Display the result in the HTML
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });
          // Event listener for solving Room 2
    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
    
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Define javascript and React concepts
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", async () => {
        const response = await fetch('directions.json'); const directions = await response.json(); const message = await 
        navigateLabyrinth(directions);  
            
                    
                        // Display the result in the HTML
                        document.getElementById("room3Result").textContent = message;
                    
            });
    
});
   // Function to find the most recent book
function findMostRecentBook(books) {
    
    return books.reduce((mostRecent, book) => { const bookDate = new Date(book.published); const mostRecentDate = new Date(mostRecent.published); return bookDate > mostRecentDate ? book : mostRecent; });}

    // Function to find the intersections of two sets
function findIntersection(setA, setB) {

return new Set([...setA].filter( x => setB.has(x)));
    
}
 //Function to navigate the labyrinth asynchronously
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // Stimulate navigating with a delay of 1 second
         await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}

