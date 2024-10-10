const quizData = {
    animals: [
        {
            question: "Which is the largest animal on Earth?",
            answers: ["African Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
            correct: "Blue Whale"
        },
        {
            question: "What is the fastest land animal measured by speed?",
            answers: ["Cheetah", "Lion", "Thomson's Gazelle", "Greyhound"],
            correct: "Cheetah"
        },
        {
            question: "Which animal is often referred to as the 'King of the Jungle' despite not actually living in jungles?",
            answers: ["Tiger", "Elephant", "Lion", "Leopard"],
            correct: "Lion"
        },
        {
            question: "What is the largest species of dolphin found in the ocean?",
            answers: ["Orca", "Common Dolphin", "Bottlenose Dolphin", "Blue Dolphin"],
            correct: "Orca"
        },
        {
            question: "Which animal holds the record for the tallest land mammal?",
            answers: ["Giraffe", "Elephant", "Kangaroo", "Okapi"],
            correct: "Giraffe"
        },
        {
            question: "Which bird species is famous for its extravagant courtship display?",
            answers: ["Peacock", "Cockatoo", "Flamingo", "Macaw"],
            correct: "Peacock"
        },
        {
            question: "Which mammal is unique for being the only one capable of sustained flight?",
            answers: ["Bat", "Flying Squirrel", "Sugar Glider", "Colugo"],
            correct: "Bat"
        },
        {
            question: "Which amphibian can thrive in both aquatic and terrestrial environments?",
            answers: ["Crocodile", "Dolphin", "Penguin", "Frog"],
            correct: "Frog"
        },
        {
            question: "Which mammal possesses the strongest bite force relative to its size?",
            answers: ["Tiger", "Hippopotamus", "Lion", "Jaguar"],
            correct: "Hippopotamus"
        },
        {
            question: "Which bird species is recognized as the fastest in a dive?",
            answers: ["Eagle", "Hawk", "Peregrine Falcon", "Swift"],
            correct: "Peregrine Falcon"
        },
    ],
    countries: [
        {
            question: "What is the capital city of Japan, known for its blend of modern and traditional culture?",
            answers: ["Beijing", "Seoul", "Tokyo", "Kyoto"],
            correct: "Tokyo"
        },
        {
            question: "Which country is historically referred to as the Land of the Rising Sun?",
            answers: ["China", "Japan", "Thailand", "Vietnam"],
            correct: "Japan"
        },
        {
            question: "Which is the largest country in the world by total area?",
            answers: ["China", "USA", "Russia", "Brazil"],
            correct: "Russia"
        },
        {
            question: "Which country is known for its unique wildlife, including kangaroos and koalas?",
            answers: ["New Zealand", "USA", "Australia", "South Africa"],
            correct: "Australia"
        },
        {
            question: "Which country has the largest number of pyramids?",
            answers: ["Egypt", "Sudan", "Mexico", "Peru"],
            correct: "Sudan"
        },
        {
            question: "What is the official language spoken in Brazil?",
            answers: ["Spanish", "Portuguese", "French", "Italian"],
            correct: "Portuguese"
        },
        {
            question: "Which is the smallest sovereign state in the world by area?",
            answers: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: "Vatican City"
        },
        {
            question: "Which country is famously associated with producing maple syrup?",
            answers: ["USA", "Canada", "Norway", "Finland"],
            correct: "Canada"
        },
        {
            question: "Which country is the most populous in the world?",
            answers: ["India", "China", "USA", "Indonesia"],
            correct: "China"
        },
        {
            question: "What is the only country that is also a continent?",
            answers: ["Australia", "Antarctica", "Greenland", "South America"],
            correct: "Australia"
        },
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            answers: ["Abraham Lincoln", "John Adams", "George Washington", "Thomas Jefferson"],
            correct: "George Washington"
        },
        {
            question: "What year did World War II officially end?",
            answers: ["1945", "1939", "1965", "1950"],
            correct: "1945"
        },
        {
            question: "Who was the first human to set foot on the moon during the Apollo 11 mission?",
            answers: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            correct: "Neil Armstrong"
        },
        {
            question: "Which ancient civilization is credited with building the pyramids at Giza?",
            answers: ["Greek", "Roman", "Egyptian", "Mayan"],
            correct: "Egyptian"
        },
        {
            question: "In which year did the Titanic tragically sink?",
            answers: ["1910", "1912", "1920", "1905"],
            correct: "1912"
        },
        {
            question: "Which empire was established and led by Genghis Khan?",
            answers: ["Ottoman", "Mongol", "Roman", "Byzantine"],
            correct: "Mongol"
        },
        {
            question: "What significant event occurred in 1989 that marked the end of the Cold War?",
            answers: ["The fall of the Berlin Wall", "The Gulf War", "The dissolution of the Soviet Union", "The signing of the Treaty of Versailles"],
            correct: "The fall of the Berlin Wall"
        },
        {
            question: "Who is credited with discovering America in 1492?",
            answers: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Hernán Cortés"],
            correct: "Christopher Columbus"
        },
        {
            question: "Which empire was known for its governance under the rule of Julius Caesar?",
            answers: ["Roman Empire", "Greek Empire", "Byzantine Empire", "Ottoman Empire"],
            correct: "Roman Empire"
        },
        {
            question: "What year marked the end of World War I?",
            answers: ["1914", "1918", "1921", "1939"],
            correct: "1918"
        },
    ],
    cars: [
        {
            question: "Which car manufacturer is known for producing the iconic 'Mustang' sports car?",
            answers: ["Ford", "Chevrolet", "Dodge", "Nissan"],
            correct: "Ford"
        },
        {
            question: "What does the acronym BMW stand for in German?",
            answers: ["Bayerische Motoren Werke", "British Motor Works", "Bavarian Motor Works", "Berlin Motor Works"],
            correct: "Bayerische Motoren Werke"
        },
        {
            question: "Which car model holds the title for the best-selling car of all time?",
            answers: ["Toyota Corolla", "Ford Model T", "Volkswagen Beetle", "Honda Accord"],
            correct: "Toyota Corolla"
        },
        {
            question: "Which car is recognized as the fastest production car in the world?",
            answers: ["Bugatti Veyron", "Koenigsegg Agera RS", "Hennessey Venom F5", "Pagani Huayra"],
            correct: "Koenigsegg Agera RS"
        },
        {
            question: "Which company produces the luxury electric sedan known as the 'Model S'?",
            answers: ["Tesla", "Ford", "BMW", "Audi"],
            correct: "Tesla"
        },
        {
            question: "Which Italian car manufacturer is recognized by the 'Prancing Horse' logo?",
            answers: ["Ferrari", "Lamborghini", "Maserati", "Alfa Romeo"],
            correct: "Ferrari"
        },
        {
            question: "What car brand is famous for its compact 'Civic' model?",
            answers: ["Honda", "Toyota", "Nissan", "Hyundai"],
            correct: "Honda"
        },
        {
            question: "Which German manufacturer is celebrated for the iconic '911' sports car?",
            answers: ["Mercedes", "Porsche", "BMW", "Audi"],
            correct: "Porsche"
        },
        {
            question: "Which brand produces the electric vehicle known as the 'Model 3'?",
            answers: ["Tesla", "BMW", "Audi", "Nissan"],
            correct: "Tesla"
        },
        {
            question: "Which car brand features the prancing horse in its logo?",
            answers: ["Ferrari", "Lamborghini", "Porsche", "Maserati"],
            correct: "Ferrari"
        }
    ],
    motorcycles: [
        {
            question: "Which motorcycle brand is renowned for the high-performance 'Hayabusa'?",
            answers: ["Suzuki", "Honda", "Yamaha", "Ducati"],
            correct: "Suzuki"
        },
        {
            question: "Which motorcycle is known for its classic cruiser design and has a strong association with American culture?",
            answers: ["Harley-Davidson", "Kawasaki", "Ducati", "BMW"],
            correct: "Harley-Davidson"
        },
        {
            question: "What is the name of the world-famous motorcycle racing event held annually in the UK?",
            answers: ["Isle of Man TT", "MotoGP", "Daytona 500", "Le Mans"],
            correct: "Isle of Man TT"
        },
        {
            question: "Which motorcycle brand is known for its dual-sport models like the 'KLR650'?",
            answers: ["Honda", "Kawasaki", "BMW", "Yamaha"],
            correct: "Kawasaki"
        },
        {
            question: "Which motorcycle is considered the best-selling bike of all time?",
            answers: ["Honda CB750", "Harley-Davidson Sportster", "Yamaha YZF-R1", "Honda Super Cub"],
            correct: "Honda Super Cub"
        },
        {
            question: "Which motorcycle brand's slogan is 'The Ultimate Riding Machine'?",
            answers: ["Ducati", "Yamaha", "BMW", "Honda"],
            correct: "BMW"
        },
        {
            question: "Which motorcycle is known for its distinctive V-twin engine and retro styling?",
            answers: ["Ducati Monster", "Indian Scout", "Harley-Davidson Sportster", "Triumph Bonneville"],
            correct: "Indian Scout"
        },
        {
            question: "What is the name of the famous motorcycle rally held in Sturgis, South Dakota?",
            answers: ["Sturgis Motorcycle Rally", "Daytona Bike Week", "Myrtle Beach Bike Week", "Laconia Motorcycle Week"],
            correct: "Sturgis Motorcycle Rally"
        },
        {
            question: "Which motorcycle brand is known for its off-road capabilities and models like the 'CRF450R'?",
            answers: ["Kawasaki", "Yamaha", "Honda", "Suzuki"],
            correct: "Honda"
        },
        {
            question: "Which motorcycle brand is known for its high-performance sport bikes and the 'R1' model?",
            answers: ["Ducati", "Kawasaki", "Yamaha", "Honda"],
            correct: "Yamaha"
        },
    ],
};


let currentQuizData = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let selectedCategory = ''; // Store the current category

const questionEl = document.getElementById("questions");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("answerBtn");
const goHomeButton = document.getElementById("goHomeBtn");
const tryAgainButton = document.getElementById("tryAgainBtn");

// Initially hide the quiz
document.querySelector(".Quiz").style.display = "none";

// Function to start the quiz
function startQuiz(category) {
    selectedCategory = category;  // Store the selected category
    currentQuizData = quizData[category];  // Load the selected quiz data
    currentQuestion = 0;  // Reset the question index
    score = 0;  // Reset the score
    selectedAnswer = null;  // Reset the selected answer

    // Hide the quiz selection and show the quiz
    document.getElementById("quizSelection").style.display = "none";
    document.querySelector(".Quiz").style.display = "block";
    
    goHomeButton.style.display = "none";  // Hide the Go Home button
    tryAgainButton.style.display = "none"; // Hide the Try Again button
    answerButtons.forEach(button => button.style.display = "block");  // Reset answer buttons visibility
    
    loadQuestion();  // Load the first question
}

// Load a question
function loadQuestion() {
    const currentQuizDataItem = currentQuizData[currentQuestion];
    questionEl.innerText = currentQuizDataItem.question;
    selectedAnswer = null;  // Reset selected answer for each new question

    // Display answers
    answerButtons.forEach((button, index) => {
        button.innerText = currentQuizDataItem.answers[index];
        button.style.backgroundColor = ""; // Reset button background
        button.style.color = ""; // Reset text color
        button.onclick = () => {
            selectedAnswer = button.innerText; // Track the selected answer
            highlightSelectedButton(button);  // Highlight the chosen answer
        };
        if (selectedAnswer === button.innerText) {
            highlightSelectedButton(button);
          }
    });

    nextButton.style.display = "none";  // Hide the "Next Question" button initially
}

// Highlight the selected button
function highlightSelectedButton(selectedBtn) {
    // Reset all buttons' backgrounds and text colors
    answerButtons.forEach(button => {
        button.style.backgroundColor = ""; // Reset background
        button.style.color = ""; // Reset text color
    });
    
    // Highlight the selected button
    selectedBtn.style.backgroundColor = "#6d3807d5"; // Highlight color
    selectedBtn.style.color = "#FFFFFF"; // Change text color to white
    
    nextButton.style.display = "block"; // Show the "Next Question" button
}


// Next question button functionality
nextButton.onclick = () => {
    if (selectedAnswer) {
        checkAnswer(selectedAnswer);
        currentQuestion++;

        if (currentQuestion < currentQuizData.length) {
            loadQuestion();  // Load the next question
        } else {
            showResults();  // Show results if it's the last question
        }
    } else {
        alert("Please select an answer first!");
    }
};

// Check the selected answer against the correct answer
function checkAnswer(answer) {
    const correctAnswer = currentQuizData[currentQuestion].correct;
    if (answer === correctAnswer) {
        score++;
    } 
}

// Function to show the final result
function showResults() {
    questionEl.innerText = `You scored ${score} out of ${currentQuizData.length}!`;
    answerButtons.forEach(button => button.style.display = "none");  // Hide answer buttons
    nextButton.style.display = "none";  // Hide the "Next Question" button

    // Show the Try Again and Go Home buttons
    tryAgainButton.style.display = "block";
    goHomeButton.style.display = "block";
}

// Go Home button functionality
goHomeButton.onclick = () => {
    // Show the quiz selection
    document.getElementById("quizSelection").style.display = "block";  
    // Hide the quiz
    document.querySelector(".Quiz").style.display = "none";  
    // Reset buttons' visibility
    goHomeButton.style.display = "none";  
    tryAgainButton.style.display = "none"; 
};

// Try Again button functionality
tryAgainButton.onclick = () => {
    startQuiz(selectedCategory);  // Restart the same quiz with the stored category
};
