const math = require('../src/math');

test('add: 1 + 1 = 2', () => { 
    expect(math.mathAdd(1, 1)).toBe(2);    
})

test('sub: 1 - 2 = -1', () => {
    expect(math.mathSub(1, 2)).toBe(-1);
})