/* eslint-env page */

describe('Forms', () => {
  // Navegamos a la página
  beforeEach(async () => {
    await page.goto('http://localhost:5000');
  });

  it("should display the title", async () => {
    // Comprobamos que el título sea correcto
    await expect(page).toMatchElement('h1', { text: '7.5 Tests de integración con puppeteer' });
  });

  it("should update the name after submit", async () => {
    // Modificamos el nombre y comprobamos el resultado
    const name = "Angel";
    await expect(page).toFill('#lastName', name);
    await expect(page).toClick('input[type="Submit"]');
    await expect(page).toMatchElement('b.name', { text: name });
  });
});
