import { withDnd } from '@music163/tango-helpers';
import { Input as BaseInput } from '../components';

export const Input = withDnd({
  name: 'Input',
  overrideProps: { autoFocus: false },
})(BaseInput);
