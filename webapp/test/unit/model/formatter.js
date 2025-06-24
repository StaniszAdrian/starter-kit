sap.ui.define([
    "stk/starterkit/model/formatter"
], function(
    formatter
){
    "use strict";
    QUnit.module("Name formatting cases");
    function formatNameTest(oOptions){
        //Act
        const sName = formatter.formatName(oOptions.sFirstName, oOptions.sLastName);
        //Assert
        oOptions.assert.strictEqual(sName, oOptions.expected, `The name was correctly formated ${sName}`);
    }
    QUnit.test(`Should format Andrzej Naczepa to A. Naczepa`, function(assert){
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Andrzej",
            sLastName: "Naczepa",
            expected: "A. Naczepa"
        });
    });
    QUnit.test(`Should format Denis Zalecki to D. Zalecki`, function(assert){
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Denis",
            sLastName: "Zalecki",
            expected: "D. Zalecki"
        });
    });
    QUnit.test(`Should format Badgirl Sanderka to B. Sanderka`, function(assert){
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Badgirl",
            sLastName: "Sanderka",
            expected: "B. Sanderka"
        });
    });
    QUnit.test(`Should format Jurij Owsienko to J. Owsienko`, function(assert){
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Jurij",
            sLastName: "Owsienko",
            expected: "J. Owsienko"
        });
    });
    QUnit.test(`Should format Jurij Galgan Owsienko to J. G. Owsienko`, function(assert){
        formatNameTest.call(this, {
            assert: assert,
            sFirstName: "Jurij Galgan",
            sLastName: "Owsienko",
            expected: "J. G. Owsienko"
        });
    });
});