const testableFunction = (input) => input;

describe('Imperative generative test', () => {
  it('Tests nothing much', () => {
    for(let i = 0; i < 1000; ++i) {
      const testData = {
        // And do extra stuff to it, of course
        valueA: Math.random(),
        valueB: Math.random(),
      };
      expect(testableFunction(testData)).toBe(testData);
    }
  })
})
