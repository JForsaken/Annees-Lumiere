export default function processResponse(response) {
  let isOk = response.ok;

  return response.text()
  .then(body => {
    let bodyCopy = body;
    try {
      bodyCopy = JSON.parse(body);
    } catch (error) {
      if (isOk) {
        isOk = false;
      }
    }

    if (isOk) {
      return bodyCopy;
    }

    const objectToThrow = {
      ...bodyCopy,
      statusCode: response.status,
    };

    throw objectToThrow;
  });
}
