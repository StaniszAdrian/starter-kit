sap.ui.define([
    "sap/ui/test/Opa5",
], function (Opa5) {
    "use strict";
    var sViewName = "ExpertsList";

    Opa5.createPageObjects({
        onTheEmployeesPage: {

            actions: {},

            assertions: {
                iShouldSeeTheExpertsList: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "expertsPage",
                        success: function () { 
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                },
                iShouldSeeTheTable: function () {
                    return this.waitFor({
                        id: "expertsTable",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The table is displayed");
                        },
                        errorMessage: "Did not find the table"
                    });
                },
                iShouldSeeTheColumn: function (sColumnName, iId) {
                    return this.waitFor({
                        id: sColumnName,
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The column is displayed");
                        },
                        errorMessage: "Did not find the column"
                    });
                },
            }
        }
    });
});