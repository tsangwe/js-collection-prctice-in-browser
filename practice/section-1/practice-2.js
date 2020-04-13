'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];

  collectionA.forEach(elementFromA => {
    collectionB.forEach(innerArrayFromB => {
      innerArrayFromB.forEach(elementFromInnerB => {
        if (elementFromA == elementFromInnerB) {
          result.push(elementFromA);
        }
      })
    })
  });

  return result;
}
