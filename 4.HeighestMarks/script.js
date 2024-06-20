// script.js

function findHighestMarks() {
    // Retrieve marks entered by the teacher
    let marks1 = parseInt(document.getElementById('marks1').value);
    let marks2 = parseInt(document.getElementById('marks2').value);
    let marks3 = parseInt(document.getElementById('marks3').value);
    let marks4 = parseInt(document.getElementById('marks4').value);
    let marks5 = parseInt(document.getElementById('marks5').value);

    // Create an array of marks
    let marksArray = [marks1, marks2, marks3, marks4, marks5];

    // Initialize a variable to store the highest marks
    let highestMarks = marksArray[0]; // Assume the first student has the highest marks initially

    // Iterate through the array to find the highest marks using ternary operator
    marksArray.forEach(mark => {
        highestMarks = mark > highestMarks ? mark : highestMarks;
    });

    // Display the highest marks to the teacher
    document.getElementById('highestMarksDisplay').textContent = `The highest marks scored by a student is: ${highestMarks}`;
}
