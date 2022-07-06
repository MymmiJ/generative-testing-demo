import { assert, property, object } from "fast-check";

const yetAnotherTestableFunction = (input) => input;

describe('Property based generative test', () => {
  it('Tests nothing much', () => {
    assert(property(object(), (testData) =>
      expect(yetAnotherTestableFunction(testData))
        .toBe(testData)))
  });
})