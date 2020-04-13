'use strict';

function collectSameElements(collectionA, objectB) {
  let result = [];

  collectionA.forEach(elementFromA => {
    let valueList = objectB["value"];
    valueList.forEach(elementFromValueList => {
      if (elementFromA["key"] == elementFromValueList) {
        result.push(elementFromA["key"]);
      }
    })
  });
  
  return result;
}
