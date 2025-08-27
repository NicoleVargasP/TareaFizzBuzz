import {convertirFizzBuzz} from "./fizzbuzz.js";

describe("Convertir a FizzBuzz", () => {
  it("Deberia devolver el mismo numero enviado", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });
   it("Deberia devolver cualquier numero enviado", () => {
    expect(convertirFizzBuzz(4)).toEqual("4");
  });
   it("Deberia devolver cualquier numero enviado en cadena", () => {
    expect(convertirFizzBuzz(5)).toEqual("5");
  });
   it("Deberia devolver el numero 3 como Fizz", () => {
    expect(convertirFizzBuzz(3)).toEqual("Fizz");
  });
  
});


