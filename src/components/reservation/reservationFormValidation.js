import memoize from 'lru-memoize';
import {
  createValidator,
  required,
  maxLength,
  minQuantity,
  email,
  phoneNumber } from '../../utils/validation';

const reservationFormValidation = createValidator({
  firstname: required,
  lastname: required,
  address: required,
  emailAddress: [required, email],
  profession: [required, maxLength(30)],
  primaryPhoneNumber: [required, phoneNumber],
  optionalPhoneNumber: [phoneNumber],
  kids: [required, minQuantity(1)],
});

export default memoize(10)(reservationFormValidation);
