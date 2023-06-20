const stringProject = require("./strings.js");
const { sum, subtraction, divide, multiply } = require("./calculator.js");
const { capitalize } = require("./capitalize.js");

describe("stringLength", () => {
  test("returns length for string with length between 1 and 10", () => {
    // Arrange
    const input = "Hello";
    const expected = 5;

    // Act
    const result = stringProject.stringLength(input);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns undefined for empty string", () => {
    // Arrange
    const input = "";
    const expected = undefined;

    // Act
    const result = stringProject.stringLength(input);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns undefined for string with length greater than 10", () => {
    // Arrange
    const input = "ThisIsALongString";
    const expected = undefined;

    // Act
    const result = stringProject.stringLength(input);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("reverseString", () => {
  test("reverses a string", () => {
    // Arrange
    const input = "Hello World";
    const expected = "dlroW olleH";

    // Act
    const result = stringProject.reverseString(input);

    // Assert
    expect(result).toBe(expected);
  });

  test("reverses an empty string", () => {
    // Arrange
    const input = "";
    const expected = "";

    // Act
    const result = stringProject.reverseString(input);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("sum", () => {
  test("adds two positive numbers", () => {
    // Arrange
    const a = 3;
    const b = 5;
    const expected = 8;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("adds a positive number and zero", () => {
    // Arrange
    const a = 2;
    const b = 0;
    const expected = 2;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("adds two negative numbers", () => {
    // Arrange
    const a = -4;
    const b = -7;
    const expected = -11;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("subtraction", () => {
  test("subtracts two positive numbers", () => {
    // Arrange
    const a = 8;
    const b = 3;
    const expected = 5;

    // Act
    const result = subtraction(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("subtracts a positive number and zero", () => {
    // Arrange
    const a = 5;
    const b = 0;
    const expected = 5;

    // Act
    const result = subtraction(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("subtracts two negative numbers", () => {
    // Arrange
    const a = -9;
    const b = -2;
    const expected = -7;

    // Act
    const result = subtraction(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("divide", () => {
  test("divides two positive numbers", () => {
    // Arrange
    const a = 10;
    const b = 2;
    const expected = 5;

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("divides a positive number by one", () => {
    // Arrange
    const a = 7;
    const b = 1;
    const expected = 7;

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("divides a negative number by a positive number", () => {
    // Arrange
    const a = -12;
    const b = 3;
    const expected = -4;

    // Act
    const result = divide(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("multiply", () => {
  test("multiplies two positive numbers", () => {
    // Arrange
    const a = 4;
    const b = 3;
    const expected = 12;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("multiplies a positive number by zero", () => {
    // Arrange
    const a = 5;
    const b = 0;
    const expected = 0;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expected);
  });

  test("multiplies a negative number by a negative number", () => {
    // Arrange
    const a = -2;
    const b = -3;
    const expected = 6;

    // Act
    const result = multiply(a, b);

    // Assert
    expect(result).toBe(expected);
  });
});

describe("capitalize", () => {
  test("capitalizes the first character of a word", () => {
    // Arrange
    const input = "hello";
    const expected = "Hello";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe(expected);
  });

  test("does not change an already capitalized word", () => {
    // Arrange
    const input = "World";
    const expected = "World";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe(expected);
  });

  test("works with single-character string", () => {
    // Arrange
    const input = "x";
    const expected = "X";

    // Act
    const result = capitalize(input);

    // Assert
    expect(result).toBe(expected);
  });
});

