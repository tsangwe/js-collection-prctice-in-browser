'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];

  collectionA.forEach(elementFromA => {
    let valueList = objectB["value"];
    valueList.forEach(elementFromValueList => {
      if (elementFromA == elementFromValueList) {
        result.push(elementFromA);
      }
    })
  });
  
  return result;
}
