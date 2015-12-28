/*! pb-gest-docnumber 0.1.1 - Copyright 2015 Palmabit <hello@palmabit.com> (http://www.palmabit.com/) */
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PbDocNumber = (function () {
  function PbDocNumber() {
    _classCallCheck(this, PbDocNumber);
  }

  _createClass(PbDocNumber, null, [{
    key: 'get',
    value: function get(doctype, userId) {
      return null;

      /*
      if (!doctype) {
        return 0;
      }
       if (typeof doctype.classNumber === 'string' && doctype.classNumber.length > 0) {
        return null;
      }
       if (!Array.isArray(doctype.counter)) {
        return 0;
      }
       for (let i = 0; i < doctype.counter.length; i += 1) {
        if (doctype.counter[i].user === userId) {
          return parseInt(doctype.counter[i].number || 0);
        }
      }
       return 0;
      */
    }
  }, {
    key: 'getNext',
    value: function getNext(doctype, userId) {
      var current = this.get(doctype, userId);
      return current === null ? null : current + 1;
    }
  }]);

  return PbDocNumber;
})();

angular.module('pbGestDocNumber', []).factory('PbGestDocNumber', function () {
  return {
    get: PbDocNumber.get,
    getNext: PbDocNumber.getNext
  };
});
//# sourceMappingURL=pb-gest-docnumber.js.map
