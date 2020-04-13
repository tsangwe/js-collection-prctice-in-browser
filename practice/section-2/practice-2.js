'use strict';

function countSameElements(collection) {
  let result = [];

  collection.forEach(element => {
    let isNewElement = true;
    let readElement = element.split("-");
    let key = readElement[0];
    let amount = 1;

    if (readElement.length > 1) amount = readElement[1];

    result.forEach(seenElement => {
      if (seenElement['key'] == key) {
        seenElement['count'] += amount;
        isNewElement = false;
      }
    })
    if (isNewElement) {
      result.push({key: key, count: parseInt(amount)});
    }
  });

  console.log(result);

  return result;
}
