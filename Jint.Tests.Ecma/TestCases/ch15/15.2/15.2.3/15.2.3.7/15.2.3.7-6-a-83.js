/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-83.js
 * @description Object.defineProperties throws TypeError when P.configurable is false, P.writalbe is false, properties.value and P.value are two booleans with different values (8.12.9 step 10.a.ii.1)
 */


function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", {
            value: false,
            writable: false,
            configurable: false 
        });

        try {
            Object.defineProperties(obj, {
                foo: {
                    value: true
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError) && dataPropertyAttributesAreCorrect(obj, "foo", false, false, false, false);
        }
    }
runTestCase(testcase);
