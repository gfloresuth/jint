/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-411.js
 * @description ES5 Attributes - Inherited property whose [[Enumerable]] attribute is set to false is non-enumerable (Math)
 */


function testcase() {
        try {
            Object.defineProperty(Object.prototype, "prop", {
                value: 1001,
                writable: false,
                enumerable: false,
                configurable: true
            });

            var verifyEnumerable = false;
            for (var p in Math) {
                if (p === "prop") {
                    verifyEnumerable = true;
                }
            }

            return !Math.hasOwnProperty("prop") && !verifyEnumerable;
        } finally {
            delete Object.prototype.prop;
        }
    }
runTestCase(testcase);
