var messages = require('../../controllers/messages');

describe("messages", function() {
  it("has an index function", function () {
    expect(messages.index).toBeDefined();
  });
  it("has a send function", function () {
    expect(messages.send).toBeDefined();
  });
  it("has an utf8 function", function () {
    expect(messages.utf8).toBeDefined();
  });
});