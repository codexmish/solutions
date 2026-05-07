// Problem 1------------

function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num: number) => {
    return num % 2 === 0;
  });
}

filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

// Problem 2------------

function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

reverseString("shanto");

// Problem 3------------

type StringOrNumber = string | number;

function checkType(item: StringOrNumber): string {
  if (typeof item === "string") {
    return "String";
  } else if (typeof item === "number") {
    return "Number";
  }
  return "";
}

checkType(33);

// Problem 4------------

function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "age");

// Problem 5------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

function toggleReadStatus(book: Book, isread: boolean = true) {
  return {
    ...book,
    isread,
  };
}

toggleReadStatus(myBook);

// Problem 6------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// Problem 7------------

type aray = (arr1: number[], arr2: number[]) => number[];

const getIntersection: aray = (arr1, arr2) => {
  return arr1.filter((item) => {
    return arr2.includes(item);
  });
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
