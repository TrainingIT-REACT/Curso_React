import React from 'react';
import { render, mount } from 'enzyme';

import UncontrolledForm from '../UncontrolledForm';

describe(UncontrolledForm, () => {
  describe("Render", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<UncontrolledForm />);
    });

    it('should add the HTML elements', () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper.is('form')).toBeTruthy();
      expect(wrapper.find('label').length).toBe(1);
      expect(wrapper.find('input[type="text"]').length).toBe(1);
      expect(wrapper.find('b.name').length).toBe(1);
      expect(wrapper.find('input[type="submit"]').length).toBe(1);
    });

    it('should not include any name by default', () => {
      // Comprobamos el texto
      expect(wrapper.find('b.name').text()).toBe('M');
    })
  });

  describe("Features", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = mount(<UncontrolledForm />);
    });

    it('should pass the ref to the input', () => {
      // En este caso necesitamos montar el componente ya que la nueva API de
      // referencias solo se instancian con mount
      const instance = wrapper.instance();
      // Comprobamos que la referencia sea correcta
      expect(instance.input.current).toBeInstanceOf(HTMLInputElement);
      expect(instance.input.current.id).toBe('lastName');
    });

    it('should not update the state on typing', () => {
      // En este caso también necesitamos hacer uso de mount ya que vamos a modificar
      // a los componentes que renderiza. En este caso, input.

      // Almacenamos el valor actual del estado:
      const value = wrapper.state().value;
      // Modificamos el contenido del input y lanzamos el evento change
      const input = wrapper.find("#lastName");
      input.instance().value = "newName"
      input.simulate('change');
      // Comprobamos que no haya cambiado nada
      expect(wrapper.state().value).toBe(value);
    });

    it('should update the state when submit', () => {
      // Al igual que los anteriores, también necesitamos utilizar mount, ya que
      // vamos a modificar el valor del input

      // Actualizamos el input
      const newName = "newName"
      const input = wrapper.find("#lastName");
      input.instance().value = newName;

      // Simulamos el envío del formulario
      wrapper.find('input[type="submit"]').simulate('submit');

      // Comprobamos que ha cambiado el estado
      expect(wrapper.state().value).toBe(newName);
      expect(wrapper.find('b.name')).toHaveText(newName);
    });
  });
});
