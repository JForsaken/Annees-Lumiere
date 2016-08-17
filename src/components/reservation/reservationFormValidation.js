import memoize from 'lru-memoize';
import {
  createValidator,
  required,
  requiredKid,
  selectOption,
  selectOptionKid,
  maxLength,
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
  language: [selectOption],

  kid1firstname: requiredKid,
  kid2firstname: requiredKid,
  kid3firstname: requiredKid,
  kid4firstname: requiredKid,
  kid5firstname: requiredKid,
  kid6firstname: requiredKid,
  kid7firstname: requiredKid,
  kid8firstname: requiredKid,
  kid9firstname: requiredKid,
  kid10firstname: requiredKid,

  kid1lastname: requiredKid,
  kid2lastname: requiredKid,
  kid3lastname: requiredKid,
  kid4lastname: requiredKid,
  kid5lastname: requiredKid,
  kid6lastname: requiredKid,
  kid7lastname: requiredKid,
  kid8lastname: requiredKid,
  kid9lastname: requiredKid,
  kid10lastname: requiredKid,

  kid1birthday: requiredKid,
  kid2birthday: requiredKid,
  kid3birthday: requiredKid,
  kid4birthday: requiredKid,
  kid5birthday: requiredKid,
  kid6birthday: requiredKid,
  kid7birthday: requiredKid,
  kid8birthday: requiredKid,
  kid9birthday: requiredKid,
  kid10birthday: requiredKid,

  kid1language: selectOptionKid,
  kid2language: selectOptionKid,
  kid3language: selectOptionKid,
  kid4language: selectOptionKid,
  kid5language: selectOptionKid,
  kid6language: selectOptionKid,
  kid7language: selectOptionKid,
  kid8language: selectOptionKid,
  kid9language: selectOptionKid,
  kid10language: selectOptionKid,

  kid1sex: selectOptionKid,
  kid2sex: selectOptionKid,
  kid3sex: selectOptionKid,
  kid4sex: selectOptionKid,
  kid5sex: selectOptionKid,
  kid6sex: selectOptionKid,
  kid7sex: selectOptionKid,
  kid8sex: selectOptionKid,
  kid9sex: selectOptionKid,
  kid10sex: selectOptionKid,

});

export default memoize(10)(reservationFormValidation);
