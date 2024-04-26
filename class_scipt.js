// 1.   The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

class Movie {
  constructor(name, studio, rating = "PG") {
    this.movieName = name;
    this.productionStudio = studio;
    this.movieRating = rating;
  }
  static getPgMovies(movies) {
    let pgMovies = movies.filter((element) =>
      element.movieRating.toLowerCase().includes("pg")
    );
    return pgMovies;
  }
}
let movie1 = new Movie("Casino Royale", "Eon Productions");
let movie2 = new Movie("Interstellar", "Paramount Pictures", "PG12");
let movie3 = new Movie("Oppenheimer", "Paramount Pictures", "pg14");
let movie4 = new Movie("Deadpool", "Marvel Studios", "R");

let movieArray = [movie1, movie2, movie3, movie4];

console.log(Movie.getPgMovies(movieArray));

//////////////////////////////////////////////////////////////////////////

// 2. Circle class

class Circle {
  constructor(color = "Red", radius = 1) {
    this.circleColor = color;
    this.circleRadius = radius;
  }
  getRadius() {
    return this.circleRadius;
  }
  setRadius(newRadius) {
    this.circleRadius = newRadius;
  }
  getColor() {
    return this.circleColor;
  }
  setColor(newColor) {
    this.circleColor = newColor;
  }
  getArea() {
    return Math.PI * this.circleRadius * this.circleRadius;
  }
  getCircumference() {
    return 2 * Math.PI * this.circleRadius;
  }
}

let circle_1 = new Circle();
let circle_2 = new Circle("Blue");
let circle_3 = new Circle("Green", 2);

console.log(`${circle_1.getRadius()} - ${circle_1.getColor()}`);
console.log(`${circle_2.getRadius()} - ${circle_2.getColor()}`);
console.log(`${circle_3.getRadius()} - ${circle_3.getColor()}`);

circle_1.setRadius(3);
circle_2.setRadius(4);
circle_3.setRadius(5);

circle_1.setColor("Orange");
circle_2.setColor("Black");
circle_3.setColor("White");

console.log(`${circle_1.getRadius()} - ${circle_1.getColor()}`);
console.log(`${circle_2.getRadius()} - ${circle_2.getColor()}`);
console.log(`${circle_3.getRadius()} - ${circle_3.getColor()}`);

console.log(
  `circle_1 -> ${circle_1.getRadius()} - Area = ${circle_1.getArea()} - Circumference = ${circle_1.getCircumference()}`
);
console.log(
  `circle_2 -> ${circle_2.getRadius()} - Area = ${circle_2.getArea()} - Circumference = ${circle_2.getCircumference()}`
);
console.log(
  `circle_3 -> ${circle_3.getRadius()} - Area = ${circle_3.getArea()} - Circumference = ${circle_3.getCircumference()}`
);

//////////////////////////////////////////////////////////////////////////

// 3. Write a Person class to hold all the details

class Person {
  constructor(name, age, gender) {
    this.personName = name;
    this.personAge = age;
    this.personGender = gender;
  }
  getName() {
    return this.personName;
  }
  getAge() {
    return this.personAge;
  }
  getGender() {
    return this.personGender;
  }

  isEligibleVoter() {
    if (this.personAge > 18) {
      return true;
    }
  }
}

let person_1 = new Person("John", 21, "M");
let person_2 = new Person("Mary", 17, "F");

console.log(`${person_1.getName()} is ${person_1.getAge()} years old and ${person_1.getGender() === "M" ? "he" : "she"} ${person_1.isEligibleVoter() ? "is" : "is not"} eligible to vote`);

console.log(`${person_2.getName()} is ${person_2.getAge()} years old and ${person_2.getGender() === "M" ? "he" : "she"} ${person_2.isEligibleVoter() ? "is" : "is not"} eligible to vote`);
///////////////////////////////////////////////////////////////////////////

// 4. Write a class to calculate Uber price

class Uber {
    constructor(vehicle, distance) {
        this.vehicle = vehicle;
        this.distance = distance;
    }
    getVehicle() {
        return this.vehicle;
    }
    getDistance() {
        return this.distance;
    }
    getUberPrice() {
        if(this.vehicle === "Auto") {
            return this.distance*8;
        }
        else if(this.vehicle === "Uber Go") {
            return this.distance*10;
        }
        else if(this.vehicle === "Uber Sedan") {
            return this.distance*12;
        }
        else if(this.vehicle === "Intercity") {
            return this.distance*14;
        }

    }
}

let ride_1 = new Uber("Auto", 5);
let ride_2 = new Uber("Uber Go", 15);
let ride_3 = new Uber("Uber Sedan", 35);
let ride_4 = new Uber("Intercity", 100);

console.log(`Price for ${ride_1.getVehicle()} to travel ${ride_1.getDistance()} kms is ${ride_1.getUberPrice()}`);
console.log(`Price for ${ride_2.getVehicle()} to travel ${ride_2.getDistance()} kms is ${ride_2.getUberPrice()}`);
console.log(`Price for ${ride_3.getVehicle()} to travel ${ride_3.getDistance()} kms is ${ride_3.getUberPrice()}`);
console.log(`Price for ${ride_4.getVehicle()} to travel ${ride_4.getDistance()} kms is ${ride_4.getUberPrice()}`);