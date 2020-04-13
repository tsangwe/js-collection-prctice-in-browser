'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = [];

  collectionA.forEach(elementFromA => {
    collectionB.forEach(elementFromB => {
      if (elementFromA === elementFromB) {
        result.push(elementFromA);
      }
    })
  });
  
  return result;
}
