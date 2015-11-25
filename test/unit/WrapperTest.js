describe("WrapperTest", function () {
  var PbGestDocNumber;

  beforeEach(function () {
    module('pbGestDocNumber');
  });

  beforeEach(inject(function ($injector) {
    PbGestDocNumber = $injector.get('PbGestDocNumber');
  }));

  it("has static get function", function () {
    expect(typeof PbGestDocNumber.get).toBe('function');
  });

  it("has static getNext function", function () {
    expect(typeof PbGestDocNumber.getNext).toBe('function');
  });
});
