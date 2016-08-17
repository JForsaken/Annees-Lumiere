import memoize from 'lru-memoize';
import {
  createValidator,
  required,
  maxLength,
  minQuantity,
  email,
  phoneNumber } from '../../utils/validation';

export const fields = [

  // PARENT FORM
  'firstname',
  'lastname',
  'address',
  'emailAddress',
  'primaryPhoneNumber',
  'optionalPhoneNumber',
  'profession',
  'language',

  // KIDS
  'kid1firstname',
  'kid1lastname',
  'kid1birthday',
  'kid1language',
  'kid1sex',

  'kid2firstname',
  'kid2lastname',
  'kid2birthday',
  'kid2language',
  'kid2sex',

  'kid3firstname',
  'kid3lastname',
  'kid3birthday',
  'kid3language',
  'kid3sex',

  'kid4firstname',
  'kid4lastname',
  'kid4birthday',
  'kid4language',
  'kid4sex',

  'kid5firstname',
  'kid5lastname',
  'kid5birthday',
  'kid5language',
  'kid5sex',

  'kid6firstname',
  'kid6lastname',
  'kid6birthday',
  'kid6language',
  'kid6sex',

  'kid7firstname',
  'kid7lastname',
  'kid7birthday',
  'kid7language',
  'kid7sex',

  'kid8firstname',
  'kid8lastname',
  'kid8birthday',
  'kid8language',
  'kid8sex',

  'kid9firstname',
  'kid9lastname',
  'kid9birthday',
  'kid9language',
  'kid9sex',

  'kid10firstname',
  'kid10lastname',
  'kid10birthday',
  'kid10language',
  'kid10sex',

];

const reservationFormValidation = createValidator({
  firstname: required,
  lastname: required,
  address: required,
  emailAddress: [required, email],
  profession: [required, maxLength(30)],
  primaryPhoneNumber: [required, phoneNumber],
  optionalPhoneNumber: [phoneNumber],

  kid1firstname: required,
  kid2firstname: required,
  kid3firstname: required,
  kid4firstname: required,
  kid5firstname: required,
  kid6firstname: required,
  kid7firstname: required,
  kid8firstname: required,
  kid9firstname: required,
  kid10firstname: required,

  kid1lastname: required,
  kid2lastname: required,
  kid3lastname: required,
  kid4lastname: required,
  kid5lastname: required,
  kid6lastname: required,
  kid7lastname: required,
  kid8lastname: required,
  kid9lastname: required,
  kid10lastname: required,

  kid1birthday: required,
  kid2birthday: required,
  kid3birthday: required,
  kid4birthday: required,
  kid5birthday: required,
  kid6birthday: required,
  kid7birthday: required,
  kid8birthday: required,
  kid9birthday: required,
  kid10birthday: required,

});

export default memoize(10)(reservationFormValidation);
