'use strict';

class PbDocNumber {
  static get(doctype, userId) {
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

  static getNext(doctype, userId) {
    var current = this.get(doctype, userId);
    return current === null ? null : (current + 1);
  }
}
