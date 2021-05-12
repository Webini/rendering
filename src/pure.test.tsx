describe('Pure or not ? ', () => {
  it('Array.sort', () => {
    const array = [2, 1, 3, 0];
    const result = array.sort((a, b) => a - b);

    // not pure
    expect(array === result).toBe(true);
  });

  it('Array.map', () => {
    const array = [1, 2, 3, 4];
    const result = array.map((el) => el);

    // pure
    expect(array === result).toBe(false);
  });

  it('Array.slice', () => {
    const array = [1, 2, 3, 4];
    const result = array.slice(0, 2);

    // pure
    expect(array === result).toBe(false);
  });

  it('Array.splice', () => {
    const array = [1, 2, 3, 4];
    const result = array.splice(0, 2);

    // pure result but array is modified
    expect(array === result).toBe(false);
  });
});
