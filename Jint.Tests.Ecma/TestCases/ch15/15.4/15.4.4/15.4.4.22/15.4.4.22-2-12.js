/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.22/15.4.4.22-2-12.js
 * @description Array.prototype.reduceRight - 'length' is own accessor property without a get function that overrides an inherited accessor property
 */


function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return typeof obj.length === "undefined";
        }

        try {
            Object.defineProperty(Object.prototype, "length", {
                get: function () {
                    return 2;
                },
                configurable: true
            });

            var obj = { 0: 12, 1: 13 };
            Object.defineProperty(obj, "length", {
                set: function () { },
                configurable: true
            });

            return Array.prototype.reduceRight.call(obj, callbackfn, 11) === 11 && !accessed;
        } finally {
            delete Object.prototype.length;
        }
    }
runTestCase(testcase);
