import {convertirFizzBuzz} from "./fizzbuzz.js";

describe("Convertir aFizzBuzz", () => {
  it("Deberia devolver el mismo numero enviado", () => {
    expect(convertirFizzBuzz(1)).toEqual("1");
  });
});


