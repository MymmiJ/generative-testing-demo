import isPrime from "@stdlib/math-base-assert-is-prime";
import { assert, configureGlobal, double, property } from "fast-check";
import { actualPrimeCheck } from "./actual-prime-check";
import { betterPrimeCheck } from "./better-prime-check";
import { efficientPrimeCheck } from "./efficient-prime-check";
import { myFirstPrimeCheck } from "./my-first-prime-check";
import { safePrimeCheck } from "./safe-prime-check";

describe('Check our function against the known-working function', () => {
  it('Works perfectly, right?', () => {
    assert(property(
      double(), (number) => expect(myFirstPrimeCheck(number)).toBe(isPrime(number))
    ));
  });
});
