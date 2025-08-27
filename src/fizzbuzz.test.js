import {convertirFizzBuzz} from "./fizzbuzz.js";

describe("Convertir a FizzBuzz", () => {
  it("Deberia devolver el mismo numero enviado", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });
   it("Deberia devolver cualquier numero enviado", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });
   it("Deberia devolver cualquier numero enviado en cadena", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });
   it("Deberia devolver el numero 3 como Fizz", () => {
    expect(convertirFizzBuzz(3)).toEqual("Fizz");
  });
   it("Deberia devolver cualquier multiplo de 3 como Fizz", () => {
    expect(convertirFizzBuzz(6)).toEqual("Fizz");
  });
  it("Deberia devolver el numero 5 como Buzz", () => {
    expect(convertirFizzBuzz(5)).toEqual("Buzz");
  });
  it("Deberia devolver cualquier multiplo de 5 como Buzz", () => {
    expect(convertirFizzBuzz(50)).toEqual("Buzz");
  });
   it("Deberia devolver cualquier multiplo de 3 y 5 como FizzBuzz", () => {
    expect(convertirFizzBuzz(15)).toEqual("FizzBuzz");
  });
  
});


