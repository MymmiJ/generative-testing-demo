const anotherTestableFunction = (input) => input;

const createTestData = (i) => ({
  valueA: Math.random(),
  valueB: Math.random(),
  valueC: i,
});

describe('Procedural generative test', () => {
  it('Tests nothing much', () => {
    for(let i = 0; i < 1000; ++i) {
      const testData = createTestData(i);
      expect(anotherTestableFunction(testData)).toBe(testData);
    }
  })
})
