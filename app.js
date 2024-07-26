// questio no 3
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var nam = "ashar";
console.log("Hello ".concat(nam, ", would you like to learn some Python today?"));
// question no 4
var nam2 = "ashar";
console.log(nam2.toUpperCase);
console.log(nam2.toLowerCase);
// question no 5
var quote = "The only limit to our realization of tomorrow is our doubts of today.";
var author = "Franklin D. Roosevelt";
console.log(quote + author);
// question no 6
var quote2 = "The only limit to our realization of tomorrow is our doubts of today.";
var author2 = "Franklin D. Roosevelt";
var message = quote2 + author2;
console.log(message);
// question no 7
var namespace = "\t  ashar  \n";
console.log(namespace);
var nonamespace = "ashar";
console.log(nonamespace);
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
var favoriteNumber = 8;
var msg = "my favorite number is " + favoriteNumber;
console.log(msg);
// question no 11
var names = ["zain", "mohaib", "fateh", "hamza"];
names.forEach(function (name) {
    console.log(names);
});
// question no 12
var naam = ["zain", "mohaib", "fateh", "hamza"];
naam.forEach(function (name) {
    console.log("Hello ".concat(naam, ", hope you are having a great day!"));
});
// q no 13
var favoriteCars = ["Tesla Model S", "Ford Mustang", "Chevrolet Camaro", "BMW M3", "Audi R8"];
favoriteCars.forEach(function (car) {
    console.log("I would like to own a ".concat(car, "."));
});
// q no 14
var guestList = ["taha", "ahmed", "hashir"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to invite you to dinner."));
});
// qno 15
var unavailableGuest = "ahmed";
console.log("\nUnfortunately, ".concat(unavailableGuest, " can't make it to the dinner."));
var newGuest = "daniyal";
guestList[guestList.indexOf(unavailableGuest)] = newGuest;
console.log("Sending out new invitations");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to invite you to dinner."));
});
// qno 16
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would like to know you I have found big dinner table so  more guest is invited."));
});
var onenewGuest = "zain";
var onenewGuest2 = "mohaib";
guestList.unshift(onenewGuest);
guestList.push(onenewGuest2);
guestList.splice(1, 0, "hamza");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to invite you to dinner."));
});
// qno 17
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I can invite two peoples in dinner."));
});
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", I would be honored to invite you to dinner."));
});
// qno 18
var placesToVisit = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];
console.log("Original order:");
console.log(placesToVisit);
var sortedPlaces = __spreadArray([], placesToVisit, true).sort();
console.log("Alphabetical order:");
console.log(sortedPlaces);
console.log("Still in original order:");
console.log(placesToVisit);
var reverseSortedPlaces = __spreadArray([], placesToVisit, true).sort().reverse();
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
var gusts14to18 = ["taha", "ahmed", 'daniyal', "zain", "mohaib", "hamza"];
console.log(gusts14to18.length + " guest invited from 14 to 18 exsersice");
// qno 20
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// console.log(cities.length);
if (cities.length == 5) {
    console.log("List of Cities:");
    console.log(cities[0]);
    console.log(cities[1]);
    console.log(cities[2]);
    console.log(cities[3]);
    console.log(cities[4]);
}
;
var inventory = [];
function addBook(title, author, genre, publicationYear, available) {
    var book = { title: title, author: author, genre: genre, publicationYear: publicationYear, available: available };
    inventory.push(book);
}
addBook('To Kill a Mockingbird', 'Harper Lee', 'Fiction', 1960, true);
addBook('1984', 'George Orwell', 'Dystopian', 1949, true);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 'Classic', 1925, false);
addBook('The Catcher in the Rye', 'J.D. Salinger', 'Fiction', 1951, true);
function displayInventory() {
    console.log('Book Inventory:');
    inventory.forEach(function (book, index) {
        console.log("".concat(index + 1, ". Title: ").concat(book.title, ", Author: ").concat(book.author, ", Genre: ").concat(book.genre, ", Publication Year: ").concat(book.publicationYear, ", Available: ").concat(book.available ? 'Yes' : 'No'));
    });
}
// qno 22
var guestList1 = ["Alice", "Bob", "Charlie"];
console.log(guestList1[5]);
var guestList2 = ["Alice", "Bob", "Charlie"];
var indexToAccess = 5;
if (indexToAccess >= 0 && indexToAccess < guestList.length) {
    console.log(guestList2[indexToAccess]);
}
else {
    console.log("Index out of bounds");
}
// qno 23
var car1 = 'subaru';
var age1 = 25;
var city = 'New York';
var temperature = 30;
var isRaining = true;
console.log("Is car == 'subaru'? I predict True.");
console.log(car1 == 'subaru');
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
var fruit = 'apple';
var car = 'Toyota';
var age = 30;
var score = 85;
var isMember = false;
var colors = ['red', 'green', 'blue'];
var fruits = ['apple', 'banana', 'cherry'];
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
var allen_color = ["greem", "yellow", "red"];
if (allen_color[0] == "green") {
    console.log("you win 5 points");
}
// qno 26
var alienColor = "green";
if (alienColor === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points.");
}
// qno 27
// FOR GREEN
var alienColor1 = "green";
if (alienColor === "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}
// FOR YELLOW
var alienColor2 = "yellow";
if (alienColor === "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}
// FOR RED
var alienColor5 = "red";
if (alienColor === "green") {
    console.log("The player just earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alienColor === "red") {
    console.log("The player just earned 15 points.");
}
// qno 28
var agee = 25;
if (agee < 2) {
    console.log("The person is a baby.");
}
else if (agee >= 2 && agee < 4) {
    console.log("The person is a toddler.");
}
else if (agee >= 4 && agee < 13) {
    console.log("The person is a kid.");
}
else if (agee >= 13 && agee < 20) {
    console.log("The person is a teenager.");
}
else if (agee >= 20 && agee < 65) {
    console.log("The person is an adult.");
}
else if (agee >= 65) {
    console.log("The person is an elder.");
}
// q no 29
var favorite_fruits = ["apple", "banana", "mango"];
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
var usernames = ["admin", "ashar", "agha", "salman", "babar"];
var condition = true;
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
// qno 31
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _a = 0, usernames_2 = usernames; _a < usernames_2.length; _a++) {
        var username = usernames_2[_a];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
;
// qno 32
var currentUsers = ['johnDoe', 'JaneSmith', 'AliceJones', 'bobBrown', 'charlieWhite'];
var newUsers = ['janesmith', 'ALICEjones', 'newUser1', 'JohnDOE', 'newUser2'];
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, newUsers_1 = newUsers; _b < newUsers_1.length; _b++) {
    var newUser = newUsers_1[_b];
    if (currentUsersLower.indexOf(newUser.toLowerCase()) !== -1) {
        console.log("The username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
// qno 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
    var number = numbers_1[_c];
    var ordinal = void 0;
    if (number === 1) {
        ordinal = 'st';
    }
    else if (number === 2) {
        ordinal = 'nd';
    }
    else if (number === 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log("".concat(number).concat(ordinal));
}
// qno 34
var favoritePizzas = ['Margherita', 'Pepperoni', 'BBQ Chicken'];
for (var _d = 0, favoritePizzas_1 = favoritePizzas; _d < favoritePizzas_1.length; _d++) {
    var pizza = favoritePizzas_1[_d];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log('I really love pizza!');
// qno 35
var animals = ['Dog', 'Cat', 'Rabbit'];
for (var _e = 0, animals_1 = animals; _e < animals_1.length; _e++) {
    var animal = animals_1[_e];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
console.log('Any of these animals would make a great pet!');
// qno 36
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and it has the message: '").concat(message, "' printed on it."));
}
make_shirt("Large", "the world is yours");
// qno 37
function make_shirt2(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and it has the message: '").concat(message, "' printed on it."));
}
// Making a large shirt with the default message
make_shirt2();
// Making a medium shirt with the default message
make_shirt2("Medium");
// Making a shirt of a small size with a custom message
make_shirt("Small", "JavaScript is awesome!");
// qno 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log('${city} is in ${country}.');
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("islambad");
// qno 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var cityCountry1 = city_country("Lahore", "Pakistan");
var cityCountry2 = city_country("New York", "USA");
var cityCountry3 = city_country("Tokyo", "Japan");
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);
// qno 40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("talha anjum", "letters");
var album2 = make_album("Talha yunus", "shikwa");
var album3 = make_album("sidumosewala", "295", 12);
console.log(album1);
console.log(album2);
console.log(album3);
// qno 41
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_magicians(magicians);
// qno 42
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
// qno 43
var greatMagicianss = make_great(__spreadArray([], magicians, true));
console.log("Original magicians:");
show_magicians(magicians);
console.log("Great magicians:");
show_magicians(greatMagicianss);
// qno 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Your sandwich includes the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("\n");
}
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Tomato", "Mayo", "Mustard");
make_sandwich("Peanut Butter", "Jelly");
// Function to store car information in an object
function createCar(manufacturer, modelName, options) {
    return {
        manufacturer: manufacturer,
        modelName: modelName,
    };
}
// Call the function with required information and additional name-value pairs
var car_one = createCar("Toyota", "Camry", { color: "blue", year: 2020 });
var car2 = createCar("Honda", "Accord", { color: "black", hasSunroof: true });
var car3 = createCar("Tesla", "Model S", { color: "white", autopilot: true, battery: "100 kWh" });
console.log(car1);
console.log(car2);
console.log(car3);
