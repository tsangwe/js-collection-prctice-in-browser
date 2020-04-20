'use strict';

function countSameElements(collection) {
  const pattern = /([a-z])([-[:](\d+)]*)*/;
  let result = [];

  collection.forEach(element => {
    let readElement = element.match(pattern);

    if (readElement[1] != undefined) {
      let key = readElement[1];
      let amount = 1;
      let isNewElement = true;

      if (readElement[3] != undefined) {
        amount = parseInt(readElement[3]);
      }

      result.forEach(seenElement => {
        if (seenElement['name'] == key) {
          seenElement['summary'] += amount;
          isNewElement = false;
        }
      })

      if (isNewElement) {
        result.push({name: key, summary: parseInt(amount)});
      }
    }
  });

  return result;
}
