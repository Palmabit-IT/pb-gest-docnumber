# Pb Gest Document Number

##Installation

```
bower install pb-gest-docnumber --save
```

##Usage

Include module ```pbGestDocNumber``` and ```PbGestDocNumber``` service.
Get last *document number* by using **get** function.
Get next *document number* by using **getNext** function.

```javascript
angular.module('myApp', ['pbGestDocNumber'])

  .controller('myController', ['PbGestDocNumber', function (PbGestDocNumber) {
    var doctype = {
      classNumber: '01234' //classNumber ID
    };

    PbGestDocNumber.get(doctype); //return null
    PbGestDocNumber.getNext(doctype); //return null

    doctype = {
      counter: [
        {
          user: '001',
          number: 1
        },
        {
          user: '002',
          number: 5
        }
      ]
    };

    PbGestDocNumber.get(doctype, '001'); //return 1
    PbGestDocNumber.getNext(doctype, '001'); //return 2

    PbGestDocNumber.get(doctype, '002'); //return 5
    PbGestDocNumber.getNext(doctype, '002'); //return 6

    PbGestDocNumber.get(doctype, '003'); //return 0
    PbGestDocNumber.getNext(doctype, '003'); //return 1
  }]);
```

## Develop

Run `grunt` command before pushing

## Test

Go to `test` directory

```
karma start
```

## Author

Palmabit.com
