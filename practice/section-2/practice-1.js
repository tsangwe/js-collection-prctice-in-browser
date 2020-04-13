'use strict';

function countSameElements(collection) {
  let result = [];

  collection.forEach(element => {
    let isNewElement = true;
    result.forEach(seenElement => {
      if (seenElement['key'] == element) {
        seenElement['count'] += 1;
        isNewElement = false;
      }
    })
    if (isNewElement) {
      result.push({key: element, count: 1});
    }
  });

  return result;
}
