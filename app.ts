// questio no 3

let nam: string = "ashar";

console.log(`Hello ${nam}, would you like to learn some Python today?`);



// question no 4

let nam2: string = "ashar";

console.log(nam2.toUpperCase);
console.log(nam2.toLowerCase);



// question no 5

let quote: string = "The only limit to our realization of tomorrow is our doubts of today.";
let author: string = "Franklin D. Roosevelt";

console.log(quote + author);



// question no 6
let quote2: string = "The only limit to our realization of tomorrow is our doubts of today.";
let author2: string = "Franklin D. Roosevelt";

let message: string = quote2 + author2

console.log(message) 

// question no 7

let namespace: string = "\t  ashar  \n";

console.log(namespace)


let nonamespace: string = "ashar";

console.log(nonamespace)


// question no 8
// addition
console.log("Addition: ", 5 + 3);

// subraction

console.log("Subtraction: ", 16 - 8);

// multiplication

console.log("Multiplication: ", 4 * 2);

// division

console.log("Division: ", 64 / 8);

// question no 9

let favoriteNumber: number = 8;

let msg: string = "my favorite number is " + favoriteNumber ;

console.log(msg);


// question no 11

let names: string[] = ["zain", "mohaib", "fateh", "hamza"];

names.forEach(name => {
    console.log(names);
});


// question no 12

let naam: string[] = ["zain", "mohaib", "fateh", "hamza"];
naam.forEach(name => {
    console.log(`Hello ${naam}, hope you are having a great day!`);
});

// q no 13
let favoriteCars: string[] = ["Tesla Model S", "Ford Mustang", "Chevrolet Camaro", "BMW M3", "Audi R8"];

favoriteCars.forEach(car => {
    console.log(`I would like to own a ${car}.`);
});

// q no 14

let guestList: string[] = ["taha", "ahmed", "hashir"];


guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner.`);
});

// qno 15
const unavailableGuest = "ahmed";
console.log(`\nUnfortunately, ${unavailableGuest} can't make it to the dinner.`);

const newGuest = "daniyal";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;
console.log("Sending out new invitations");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner.`);
    
});

// qno 16
guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would like to know you I have found big dinner table so  more guest is invited.`);
})

const onenewGuest ="zain"
const onenewGuest2 ="mohaib"

guestList.unshift(onenewGuest);
guestList.push(onenewGuest2);
guestList.splice(1, 0, "hamza");


guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner.`);
});

// qno 17

guestList.forEach(guest => {
    console.log(`Dear ${guest}, I can invite two peoples in dinner.`);
})

while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}


guestList.forEach(guest => {
    console.log(`Dear ${guest}, I would be honored to invite you to dinner.`);
});

// qno 18
let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];


console.log("Original order:");
console.log(placesToVisit);


let sortedPlaces = [...placesToVisit].sort();
console.log("Alphabetical order:");
console.log(sortedPlaces);


console.log("Still in original order:");
console.log(placesToVisit);


let reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("Reverse alphabetical order:");
console.log(reverseSortedPlaces);


console.log("Still in original order:");
console.log(placesToVisit);


placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);


placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);


placesToVisit.sort();
console.log("Sorted in alphabetical order:");
console.log(placesToVisit);


placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit);

// qno 19
let gusts14to18 =["taha","ahmed",'daniyal',"zain","mohaib","hamza"]

console.log(gusts14to18.length + " guest invited from 14 to 18 exsersice");

// qno 20
let cities: string[] = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

// console.log(cities.length);
if(cities.length == 5){
    console.log("List of Cities:")
    console.log(cities[0]);
    console.log(cities[1]);
    console.log(cities[2]);
    console.log(cities[3]);
    console.log(cities[4]);
};

// qno 21

interface Book {
    title: string;
    author: string;
    genre: string;
    publicationYear: number;
    available: boolean;
}


let inventory: Book[] = [];


function addBook(title: string, author: string, genre: string, publicationYear: number, available: boolean): void {
    const book: Book = { title, author, genre, publicationYear, available };
    inventory.push(book);
}


addBook('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960, true);
addBook('1984', 'George Orwell', 'Dystopian', 1949, true);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925, false);
addBook('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 1951, true);


function displayInventory(): void {
    console.log('Book Inventory:');
    inventory.forEach((book, index) => {
        console.log(`${index + 1}. Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Publication Year: ${book.publicationYear}, Available: ${book.available ? 'Yes' : 'No'}`);
    });
}

// qno 22
let guestList1: string[] = ["Alice", "Bob", "Charlie"];

console.log(guestList1[5]);

let guestList2: string[] = ["Alice", "Bob", "Charlie"];
let indexToAccess = 5;

if (indexToAccess >= 0 && indexToAccess < guestList.length) {
    console.log(guestList2[indexToAccess]);
} else {
    console.log("Index out of bounds");
}


// qno 23
let car1 = 'subaru';
let age1 = 25;
let city = 'New York';
let temperature = 30;
let isRaining = true;

console.log("Is car == 'subaru'? I predict True.");
console.log(car1== 'subaru');

console.log("Is car == 'toyota'? I predict False.");
console.log(car1 == 'toyota');

console.log("Is age >= 18? I predict True.");
console.log(age1 >= 18);

console.log("Is age < 18? I predict False.");
console.log(age1 < 18);

console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');

console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == 'Los Angeles');

console.log("Is temperature <= 32? I predict True.");
console.log(temperature <= 32);

console.log("Is temperature > 100? I predict False.");
console.log(temperature > 100);

console.log("Is isRaining == true? I predict True.");
console.log(isRaining == true);

console.log("Is isRaining == false? I predict False.");
console.log(isRaining == true);

console.log("Is car != 'subaru'? I predict False.");
console.log(car1 != 'subaru');

console.log("Is age == 25? I predict True.");
console.log(age1 == 25);

console.log("Is city != 'New York'? I predict False.");
console.log(city != 'New York');

console.log("Is temperature > 25? I predict True.");
console.log(temperature > 25);

console.log("Is isRaining != true? I predict False.");
console.log(isRaining != true);

// qo 24
let fruit = 'apple';
let car = 'Toyota';
let age = 30;
let score = 85;
let isMember = false;
let colors = ['red', 'green', 'blue'];
let fruits = ['apple', 'banana', 'cherry'];

// Tests for equality and inequality with strings
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');

console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == 'orange');

console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');

console.log("Is car != 'Toyota'? I predict False.");
console.log(car != 'Toyota');

// Tests using the lower case function
console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');

console.log("Is fruit.toLowerCase() == 'Apple'? I predict False.");
console.log(fruit.toLowerCase() == 'Apple');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 30? I predict True.");
console.log(age == 30);

console.log("Is age != 25? I predict True.");
console.log(age != 25);

console.log("Is score > 80? I predict True.");
console.log(score > 80);

console.log("Is score < 90? I predict True.");
console.log(score < 90);

console.log("Is score >= 85? I predict True.");
console.log(score >= 85);

console.log("Is score <= 80? I predict False.");
console.log(score <= 80);

// Tests using "and" and "or" operators
console.log("Is age > 20 and score > 80? I predict True.");
console.log(age > 20 && score > 80);

console.log("Is age > 35 and score > 80? I predict False.");
console.log(age > 35 && score > 80);

console.log("Is age > 25 or score > 90? I predict True.");
console.log(age > 25 || score > 90);

console.log("Is age > 35 or score > 90? I predict False.");
console.log(age > 35 || score > 90);

// Test whether an item is in an array
console.log("Is 'red' in colors? I predict True.");
console.log(colors.indexOf('red') !== -1);

console.log("Is 'yellow' in colors? I predict False.");
console.log(colors.indexOf('yellow') === -1);

console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.indexOf('banana') !== -1);

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits.indexOf('grape') === -1);


console.log("Is 'yellow' not in colors? I predict True.");
console.log(colors.indexOf('yellow') === -1);

console.log("Is 'red' not in colors? I predict False.");
console.log(colors.indexOf('red') !== -1);

console.log("Is 'grape' not in fruits? I predict True.");
console.log(fruits.indexOf('grape') === -1);

console.log("Is 'apple' not in fruits? I predict False.");
console.log(fruits.indexOf('apple') !== -1);


// qno 25 
let allen_color =["greem" ,"yellow" ,"red"]
if(allen_color[0] == "green"){
    console.log("you win 5 points")
}

// qno 26
let alienColor: string = "green";

if (alienColor === "green") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}

// qno 27
// FOR GREEN
let alienColor1: string = "green";

if (alienColor === "green") {
  console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
  console.log("The player just earned 15 points.");
}

// FOR YELLOW
let alienColor2: string = "yellow";

if (alienColor === "green") {
  console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
  console.log("The player just earned 15 points.");
}

// FOR RED

let alienColor5: string = "red";

if (alienColor === "green") {
  console.log("The player just earned 5 points.");
} else if (alienColor === "yellow") {
  console.log("The player just earned 10 points.");
} else if (alienColor === "red") {
  console.log("The player just earned 15 points.");
}

// qno 28
let agee: number = 25;  

if (agee < 2) {
  console.log("The person is a baby.");
} else if (agee >= 2 && agee < 4) {
  console.log("The person is a toddler.");
} else if (agee >= 4 && agee < 13) {
  console.log("The person is a kid.");
} else if (agee >= 13 && agee < 20) {
  console.log("The person is a teenager.");
} else if (agee >= 20 && agee < 65) {
  console.log("The person is an adult.");
} else if (agee >= 65) {
  console.log("The person is an elder.");
}

// q no 29
let favorite_fruits: string[] = ["apple", "banana", "mango"];

// Check for different fruits
if (favorite_fruits.indexOf("apple") !== -1) {
  console.log("You really like apples!");
}

if (favorite_fruits.indexOf("banana") !== -1) {
  console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("mango") !== -1) {
  console.log("You really like mangos!");
}

// qno 30
let usernames: string[] = ["admin", "ashar", "agha", "salman", "babar"];
let condition =true

for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// qno 31
usernames = [];


if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
};

// qno 32
let currentUsers: string[] = ['johnDoe', 'JaneSmith', 'AliceJones', 'bobBrown', 'charlieWhite'];


let newUsers: string[] = ['janesmith', 'ALICEjones', 'newUser1', 'JohnDOE', 'newUser2'];


let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (let newUser of newUsers) {
  if (currentUsersLower.indexOf(newUser.toLowerCase()) !== -1) {
      console.log(`The username '${newUser}' is already taken. Please enter a new username.`);
  } else {
      console.log(`The username '${newUser}' is available.`);
  }
}

// qno 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


for (let number of numbers) {
   
    let ordinal: string;
    if (number === 1) {
        ordinal = 'st';
    } else if (number === 2) {
        ordinal = 'nd';
    } else if (number === 3) {
        ordinal = 'rd';
    } else {
        ordinal = 'th';
    }
    
    
    console.log(`${number}${ordinal}`);
}


// qno 34
let favoritePizzas: string[] = ['Margherita', 'Pepperoni', 'BBQ Chicken'];


for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log('I really love pizza!');

// qno 35
let animals: string[] = ['Dog', 'Cat', 'Rabbit'];


for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}


console.log('Any of these animals would make a great pet!');

// qno 36
function make_shirt(size: any, message: any): void {
  console.log(`The shirt size is ${size} and it has the message: '${message}' printed on it.`);
}


make_shirt("Large", "the world is yours");

// qno 37
function make_shirt2(size: string = "Large", message: string = "I love TypeScript"): void {
  console.log(`The shirt size is ${size} and it has the message: '${message}' printed on it.`);
}

// Making a large shirt with the default message
make_shirt2();

// Making a medium shirt with the default message
make_shirt2("Medium");

// Making a shirt of a small size with a custom message
make_shirt("Small", "JavaScript is awesome!");

// qno 38
function describe_city(city: string, country: string = "Pakistan"): void {
  console.log('${city} is in ${country}.');
}


describe_city("Karachi");
describe_city("Lahore");
describe_city("islambad");


// qno 39

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}


const cityCountry1 = city_country("Lahore", "Pakistan");
const cityCountry2 = city_country("New York", "USA");
const cityCountry3 = city_country("Tokyo", "Japan");


console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);


// qno 40
function make_album(artist: string, title: string, tracks?: number): object {
  const album: { artist: string, title: string, tracks?: number } = {
      artist: artist,
      title: title,
  };

  if (tracks !== undefined) {
      album.tracks = tracks;
  }

  return album;
}


const album1 = make_album("talha anjum", "letters");
const album2 = make_album("Talha yunus", "shikwa");
const album3 = make_album("sidumosewala", "295", 12);


console.log(album1);
console.log(album2);
console.log(album3);


// qno 41
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

function show_magicians(magicians: string[]): void {
  for (let magician of magicians) {
    console.log(magician);
  }
}

show_magicians(magicians);

// qno 42
function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}

// qno 43
let greatMagicianss: string[] = make_great([...magicians]);


console.log("Original magicians:");
show_magicians(magicians);


console.log("Great magicians:");
show_magicians(greatMagicianss);

// qno 44

function make_sandwich(...items: any[]): void {
  console.log("Your sandwich includes the following items:");
  for (let item of items) {
    console.log(` ${item}`); // Use backticks for template literals
  }
  console.log("\n");
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Mayo", "Mustard");
 make_sandwich("Peanut Butter", "Jelly");

// qno 45
type CarInfo = {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
};

// Function to store car information in an object
function createCar(manufacturer: string, modelName: string, options: { [key: string]: any }): CarInfo {
  return {
    manufacturer,
    modelName,
    
    
  };
}

// Call the function with required information and additional name-value pairs
let car_one = createCar("Toyota", "Camry", { color: "blue", year: 2020 });
let car2 = createCar("Honda", "Accord", { color: "black", hasSunroof: true });
let car3 = createCar("Tesla", "Model S", { color: "white", autopilot: true, battery: "100 kWh" });


console.log(car1);
console.log(car2);
console.log(car3);
