import React from 'react';
import { mount } from 'enzyme';

// Componente
import App from '../App';

describe(App, () => {
  it('should send the article', done => {
    const wrapper = mount(<App />);
    const title = "My Title";
    const body = "Body";
    const id = 12345;

    const fetchMock =
      jest.fn()
        .mockReturnValue(Promise.resolve({
          json: () => ({ id, title, body })
        }))

    // Modificamos la función fetch!
    global.fetch = fetchMock;

    // Modificamos los campos y mandamos el formulario
    const titleInput = wrapper.find("#title");
    titleInput.instance().value = title;
    titleInput.simulate('change');

    const contentInput = wrapper.find("#content");
    contentInput.instance().value = body;
    contentInput.simulate('change');

    // Simulamos el envío del formulario
    wrapper.find('input[type="submit"]').simulate('submit');

    // Comprobamos!
    expect(fetchMock).toHaveBeenCalled();
    expect(fetchMock).toBeCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        body: JSON.stringify({
          title,
          body,
          userId: 1
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    // Fuerza a que se resuelvan todas las promesas. Aunque una promesa esté
    // resuelta, eso no quiere decir que se resuelva de manera síncrona.
    // setImmediate es un pequeño truco para forzar esa sincronía y poder
    // comprobar el resultado correctamente
    setImmediate(() => {
      expect(wrapper.state().response).toContain(id);
      done();
    });
  });
});
