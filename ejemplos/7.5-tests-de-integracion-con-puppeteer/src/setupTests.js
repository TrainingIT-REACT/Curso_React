import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configuramos Enzyme
configure({ adapter: new Adapter() });
