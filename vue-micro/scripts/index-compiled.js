System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      class Test {
        init() {
          console.log("初始化");
        }

      }

      _export("default", Test);
    }
  };
});
