describe("Mocks", () => {
  it('should work', () => {
    // Definimos el mock
    const increment = jest.fn(x => x + 1);

    // Lo utilizamos
    const arr = [1, 2];
    arr.forEach(increment);

    // Realizamos comprobaciones sobre el
    // Comprobamos que se ha llamado alguna vez
    expect(increment).toHaveBeenCalled();
    // Comprobamos que se haya llamado dos veces
    expect(increment).toHaveBeenCalledTimes(2);
    // Comprobamos que se ha llamado con determinados parámetros
    expect(increment).toBeCalledWith(1, 0, arr);
    expect(increment).toBeCalledWith(2, 1, arr);
    // Comprobamos que los valores devueltos sean los correctos
    expect(increment.mock.results[0].value).toBe(2);
    expect(increment.mock.results[1].value).toBe(3);
  });

  it('should return values', () => {
    const mock = jest.fn();

    // Predefinimos los valores
    mock
      .mockReturnValueOnce('hola')
      .mockReturnValueOnce('que tal?')
      // Este valor se devolverá a partir de la tercera
      // llamada
      .mockReturnValue('adios')

    // Comprobamos
    expect(mock()).toBe('hola');
    expect(mock()).toBe('que tal?');
    expect(mock()).toBe('adios');
    expect(mock()).toBe('adios');
    expect(mock()).toBe('adios');
  });
});
