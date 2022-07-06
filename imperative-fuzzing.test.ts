const andYetAnotherTestableFunction = (input) => input;

describe('Imperative fuzzing test', () => {
  it('Tests nothing much', () => {
    for(let i = 0; i < 100000; ++i) {
      const testData = {
        valueA: i,
        valueB: i+1,
      };
      expect(andYetAnotherTestableFunction(testData)).toBe(testData);
    }
  })
})
