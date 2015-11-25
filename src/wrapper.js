angular.module('pbGestDocNumber', [])

  .factory('PbGestDocNumber', function () {
    return {
      get: PbDocNumber.get,
      getNext: PbDocNumber.getNext
    }
  });
