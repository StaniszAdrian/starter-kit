/*global QUnit*/

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList"
],function (opaTest) {
    "use strict"
    
    QUnit.module("CustomersListJourney");
    
    opaTest("Shoulde see the initial page of the app with elements", function (Given, When, Then){
        //Arrangements
        Given.iStartMyApp({hash: "CustomersList"});

        //Assertions
        Then.onTheCustomersListPage.iShouldSeeTheCustomersList();
        Then.onTheCustomersListPage.iShouldFindTheTable();

        //Cleanup
        Then.iTeardownMyApp();
    });
});