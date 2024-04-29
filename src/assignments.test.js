/* eslint-disable no-undef */
import {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
} from "./assignments";

// tests for capitalize()
test("capitalize initial of banana and result in Banana", () => {
  expect(capitalize("banana")).toBe("Banana");
});

test("string with capitalized initial remains unchanged", () => {
  expect(capitalize("Alfred")).toBe("Alfred");
});

test("providing an integer as parameter will return an error message", () => {
  expect(capitalize(12)).toBe("Error - 12 is not a string.");
});

// tests for reverseString
test("reverse string 'banana' into 'ananab", () => {
  expect(reverseString("banana")).toBe("ananab");
});

test("reversing a string preserves the character case", () => {
  expect(reverseString("BanAnA")).toBe("AnAnaB");
});

test("providing an integer as parameter will return an error message", () => {
  expect(reverseString(987)).toBe("Error - 987 is not a string.");
});

// tests for Calculator object
// global variable used for most Calculator tests
const calculator = new Calculator(7, 2);

test("7 plus 2 equals 9", () => {
  const result = calculator.add();

  expect(result).toBe(9);
});

test("7 minus 2 equals 5", () => {
  const result = calculator.subtract();

  expect(result).toBe(5);
});

test("7 minus 9 equals -2", () => {
  const newCalculator = new Calculator(7, 9);

  const result = newCalculator.subtract();

  expect(result).toBe(-2);
});

test("7 divided by 2 equals 3.5", () => {
  const result = calculator.divide();

  expect(result).toBe(3.5);
});

test("7 times 2 equals 14", () => {
  const result = calculator.multiply();

  expect(result).toBe(14);
});

// tests for caesarCipher function
test("string 'testing' with a shift value of 2 becomes vguvkpi", () => {
  expect(caesarCipher("testing", 2)).toBe("vguvkpi");
});

test("punctuation remains intact regardless of shift value", () => {
  expect(caesarCipher("testing!!", 5)).toBe("yjxynsl!!");
});

test("capitalized letters remain capitalized", () => {
  expect(caesarCipher("Hello, world!", 5)).toBe("Mjqqt, btwqi!");
});

// tests for analyzeArray function
test("[1,8,3,4,2,6] returns an object with a min value of 1 and a max value of 8", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object.min).toBe(1);
  expect(object.max).toBe(8);
});

test("[1,8,3,4,2,6] returns an average value of 4", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  expect(object.average).toBe(4);
});

test("[1,8,3,4,2,6,10,999,123] returns a length value of 9", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6, 10, 999, 123]);

  expect(object.length).toBe(9);
});
