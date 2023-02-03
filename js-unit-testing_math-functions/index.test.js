import { add, subtract, multiply, divide } from "./index";

describe('add function', () => {
  it('should return 5', () => {
    const result = add(2, 3);
    expect(result).toBe(5)
  });

  it('should return less than zero', () => {
    const result = add(5, -10);
    expect(result).toBeLessThan(0)
  })

  it('should return a value close to 0.3', () => {
    const result = add(0.1, 0.2)
    expect(result).toBeCloseTo(0.3)
  })
})
describe('subtract function', () => {
  it('should return 10', () => {
    const result = subtract(15, 5)
    expect(result).toBe(10)
  })

  it('should return a negative number', () => {
    const result = subtract(3, 5)
    expect(result).toBeLessThan(0)
  })
})

describe('multiply function', () => {
  it('should return 8', () => {
    const result = multiply(2, 4)
    expect(result).toBe(8)
  })
  it('should return a negative value if the first input is negative', () => {
    const result = multiply(-2, 5)
    expect(result).toBeLessThan(0)
  })
  it('should return a negative value if the second input is negative', () => {
    const result = multiply(2, -5)
    expect(result).toBeLessThan(0)
  })
  it('should return a positive value if both inputs are positive', () => {
    const result = multiply(2, 5)
    expect(result).toBeGreaterThan(0)
  })
})

describe('divide function', () => {
  it('should return 3', () => {
    const result = divide(9, 3)
    expect(result).toBe(3)
  })
  it('should return you should not do this', () => {
    const result = divide(9, 0)
    expect(result).toBe("You should not do this!")
  })

})
