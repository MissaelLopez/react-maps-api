import { calculateCost } from "./calculateCost";

describe("Test calculate the shipping cost function", () => {
  // That the distance ba a string
  it("Distance is a string", () => {
    const result = calculateCost("Hello, world!");
    expect(result).toEqual("Distance is not a number");
  });

  // Calculate the shipping cost with a distance less than or equal to 100 km
  it("Distance <= 100km", () => {
    const result = calculateCost(67);
    expect(result).toEqual(100);
  });

  // Calculate the shipping cost with a distance less than or equal to 200 km
  it("Distance <= 200km", () => {
    const result = calculateCost(189);
    expect(result).toEqual(130);
  });

  // Calculate the shipping cost with a distance less than or equal to 400 km
  it("Distance <= 400km", () => {
    const result = calculateCost(345);
    expect(result).toEqual(170);
  });

  // Calculate the shipping cost with a distance less than or equal to 700 km
  it("Distance <= 700km", () => {
    const result = calculateCost(628);
    expect(result).toEqual(210);
  });

  // Calculate the shipping cost with a distance less than or equal to 1000 km
  it("Distance <= 1000km", () => {
    const result = calculateCost(819);
    expect(result).toEqual(1250);
  });

  // Calculate the shipping cost with a distance greater than 1000 km
  it("Distance > 1000km", () => {
    const result = calculateCost(2300);
    expect(result).toEqual(1350);
  });
});
