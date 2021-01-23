

// random insult generator 

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring","Stupid"];
let randomWords = ["Fly", "Marot", "Stick", "Monkey", "Rat"];

// Pick a random body part from the randomBodyParts array: 

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Pick a random adjective from the randomAdjectives array: 

let randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Pick a random word from the randomWords array: 

let randomWord = randomWords[Math.floor(Math.random() * 5)];

// Join all random strings into one sentence.

let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + " !!!"

console.log(randomString)


/*

/// random insult generator using functions 

let pickRandomWord = function(word){
    return words [Math.floor(Math.random() * word.length)]
}

let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring","Stupid"];
let randomWords = ["Fly", "Marot", "Stick", "Monkey", "Rat"];

// join all the random strings into sentence: 

let secondRandomString = "Your " + pickRandomWord(randomBodyParts) + "is like a " + pickRandomWord(randomAdjectives) 
+ " " + pickRandomWord(randomWords) + "!!!"

console.log(secondRandomString)

*/