describe("PbDocNumberTest", function () {
  var doctype, userId;

  // it("has static get function", function () {
  //   expect(typeof PbDocNumber.get).toBe('function');
  // });
  //
  // it("has 0 if doctype is undefined or null", function () {
  //   expect(PbDocNumber.get()).toBe(0);
  //   expect(PbDocNumber.get(null)).toBe(0);
  //   expect(PbDocNumber.get(null, '')).toBe(0);
  // });
  //
  // it("has 0 if doctype counter is not an array", function () {
  //   expect(PbDocNumber.get({})).toBe(0);
  //   expect(PbDocNumber.get({counter: {}})).toBe(0);
  //   expect(PbDocNumber.get({counter: 0})).toBe(0);
  // });
  //
  // it("has 0 if class number is not a string", function () {
  //   expect(PbDocNumber.get({classNumber: null})).toBe(0);
  //   expect(PbDocNumber.get({classNumber: 0})).toBe(0);
  //   expect(PbDocNumber.get({classNumber: {}})).toBe(0);
  // });
  //
  // it("has 0 if class number is a void string", function () {
  //   expect(PbDocNumber.get({classNumber: ''})).toBe(0);
  // });
  //
  // it("has null if doctype has a class number", function () {
  //   expect(PbDocNumber.get({classNumber: '1'})).toBeNull();
  //   expect(PbDocNumber.getNext({classNumber: '1'})).toBeNull();
  //   expect(PbDocNumber.get({classNumber: '1', counter: {}})).toBeNull();
  //   expect(PbDocNumber.getNext({classNumber: '1', counter: {}})).toBeNull();
  // });
  //
  // describe("DocNumberTest", function () {
  //   var userId1, userId2, doctype;
  //
  //   beforeEach(function () {
  //     userId1 = '001';
  //     userId2 = '002';
  //
  //     doctype = {
  //       counter: [{
  //           user: userId1,
  //           number: 1
  //       }]
  //     };
  //   });
  //
  //   it("get last document number user counter is found", function () {
  //     expect(PbDocNumber.get(doctype, userId1)).toBe(1);
  //     expect(PbDocNumber.get(doctype, userId2)).toBe(0);
  //   });
  //
  //   it("get next document number user counter is found", function () {
  //     expect(PbDocNumber.getNext(doctype, userId1)).toBe(2);
  //     expect(PbDocNumber.getNext(doctype, userId2)).toBe(1);
  //   });
  // });

  it("should always return null", function () {
    expect(PbDocNumber.get()).toBeNull();
    expect(PbDocNumber.get(null)).toBeNull();
    expect(PbDocNumber.get(null, '')).toBeNull();
    expect(PbDocNumber.get({})).toBeNull();
    expect(PbDocNumber.get({counter: {}})).toBeNull();
    expect(PbDocNumber.get({counter: 0})).toBeNull();
    expect(PbDocNumber.get({classNumber: null})).toBeNull();
    expect(PbDocNumber.get({classNumber: 0})).toBeNull();
    expect(PbDocNumber.get({classNumber: {}})).toBeNull();
  });
});
