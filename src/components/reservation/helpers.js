import { forEach, omitBy } from 'lodash';

const isEmpty = value => value === undefined || value === null || value === '';

export function extractReservationBody(fields) {
  // remove all empty values
  const filtered = omitBy(fields, field => isEmpty(field.value));

  // parent form related fields
  const parentForm = omitBy(filtered, (field, key) => key.includes('kid'));

  // kid form related fields
  const kidFields = omitBy(filtered, (field, key) => !key.includes('kid'));

  // 7 fields per kid
  const kidCount = Object.keys(kidFields).length / 7;
  const kids = [];

  // build each kid object
  for (let i = 0; i < kidCount; i++) {
    const currentKid = omitBy(kidFields, (field, key) => {
      const index = i + 1;
      if (index === 1) {
        return !key.includes(index) && key.includes(10);
      }
      return !key.includes(index);
    });

    const kid = {};
    let day;
    let month;
    let year;

    // remove `kid${i}` from each field key
    forEach(currentKid, (field, key) => {
      if (key.includes('Day')) {
        day = field.value;
      } else if (key.includes('Month')) {
        month = field.value;
      } else if (key.includes('Year')) {
        year = field.value;
      } else {
        const formattedKey = key.substr(3 + i.toString().length);
        kid[formattedKey] = field.value;
      }
    });

    kid.birthday = `${day}-${month}-${year}`;
    kids.push(kid);
  }

  // Only values for keys from parent fields
  const cleanedParent = {};
  forEach(parentForm, (field, key) => {
    cleanedParent[key] = field.value;
  });

  return {
    ...cleanedParent,
    kids,
  };
}
