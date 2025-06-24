/*global QUnit*/

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/ExpertList",
    "./pages/Master"
], function (opaTest) {
    "use strict"

    QUnit.module("Employees Journey");

    opaTest("Shoulde see the initial page of the app with elements", function (Given, When, Then) {
        //Arrangements
        Given.iStartMyApp({ hash: "Master" });

        //Assertions
        Then.onTheViewPage.iShouldSeeThePageView();
        Then.onTheViewPage.iShouldFindTheEmployeeButton("naviToEmployees");
        When.onTheViewPage.iPressControl("naviToEmployees");
        Then.onTheEmployeesPage.iShouldSeeTheExpertsList();
        Then.onTheEmployeesPage.iShouldSeeTheTable();
        Then.onTheEmployeesPage.iShouldSeeTheColumn("nameColumn", 0);
        Then.onTheEmployeesPage.iShouldSeeTheColumn("roleColumn", 1);
        Then.onTheEmployeesPage.iShouldSeeTheColumn("ordersColumn", 2);
        Then.onTheEmployeesPage.iShouldSeeTheColumn("actionsColumn", 3);



        //Cleanup
        Then.iTeardownMyApp();
    });
});