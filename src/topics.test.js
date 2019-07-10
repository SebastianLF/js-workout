import {generateSerie} from './topics.js';

describe('Array returned', () => {

  it('the type returned should be an Array.', () => {
    expect(Array.isArray(generateSerie())).toBe(true)
  });

  it("returned length sould equal 2 by default.", () => {
    const returned = generateSerie()
    expect(returned.length).toBe(2)
  })

  it("returned length sould equal 'serieLength' param.", () => {
    expect(generateSerie(4).length).toBe(4)
  })

})
