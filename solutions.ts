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
