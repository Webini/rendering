describe('Pure or not ? ', () => {
  it.skip('Array.sort', () => {
    const array = [2, 1, 3, 0];
    const result = array.sort((a, b) => a - b);

    expect(array === result).toBe();
  });

  it.skip('Array.map', () => {
    const array = [1, 2, 3, 4];
    const result = array.map((el) => el);

    expect(array === result).toBe();
  });

  it.skip('Array.slice', () => {
    const array = [1, 2, 3, 4];
    const result = array.slice(0, 2);

    expect(array === result).toBe();
  });

  it.skip('Array.splice', () => {
    const array = [1, 2, 3, 4];
    const result = array.splice(0, 2);

    expect(array === result).toBe();
  });
});
