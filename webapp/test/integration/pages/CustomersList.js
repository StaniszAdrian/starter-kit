sap.ui.define([
    "sap/ui/test/Opa5",
], function (Opa5, Press) {
    "use strict";
    var sViewName = "CustomersList";

    Opa5.createPageObjects({
        onTheCustomersListPage: {

            actions: {
                
            },

            assertions: {
                iShouldSeeTheCustomersList: function () {
                    return this.waitFor({
                        viewName: sViewName,
                        id: "customersPage",
                        success: function () {
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                },
                iShouldFindTheTable: function () {
                    return this.waitFor({
                        id: "customersTable",
                        viewName: sViewName,
                        success: function (oTable) {
                            Opa5.assert.ok(true, "The table is displayed");
                            const iItemsCount = oTable.getItems().length;
                            Opa5.assert.notStrictEqual(iItemsCount, 0, `Table has : ${iItemsCount} items`);
                        },
                        errorMessage: "Did not find the table"
                    });
                },
            }
        }
    });
});