
describe('callbacks', () => {
  it('should check the callback', done => {
    const callback = () => {
      expect(1 + 1).toBe(2);
      done();
    }

    callback();
  })
})

describe('promise', () => {
  it('should resolve', () => {
    return Promise.resolve('test').then(data => {
      expect(data).toBe('test')
    });
  });

  it('should reject', () => {
    expect.assertions(1);
    return Promise.reject('error').catch(err => {
      expect(err).toMatch('error')
    });
  });

  it('should resolve with expect', () => {
    return expect(Promise.resolve('test')).resolves.toBe('test');
  });

  it('should reject with expect', () => {
    return expect(Promise.reject('error')).rejects.toBe('error');
  });
});

describe('async / await', () => {
  it('should resolve', async () => {
    const result = await Promise.resolve('test');
    expect(result).toBe('test');
  });

  it('should reject', async () => {
    expect.assertions(1);

    try {
      const result = await Promise.reject('error');
    } catch(err) {
      expect(err).toMatch('error');
    }
  });

  it('should resolve with expect', async () => {
    await expect(Promise.resolve('test')).resolves.toBe('test');
  });

  it('should reject with expect', async () => {
    await expect(Promise.reject('error')).rejects.toBe('error');
  });
});
