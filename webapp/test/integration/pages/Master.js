sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";
	var sViewName = "Master";
	
	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {
				iPressControl: function (sID) {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        id: sID,
                        viewName: sViewName,
                        actions: new Press(),
                        success: function () {
                            Opa5.assert.ok(`Succesfully pressed ${sID}`);
                        },
                        errorMessage: "Could not find the Control"
                    });
                }
			},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "MasterPage",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},
				iShouldFindTheEmployeeButton: function (sID) {
					return this.waitFor({
						id: sID,
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sID + " button is displayed");
						},
						errorMessage: "Did not find the " + sID + " button"
					});
				}
			}
		}
	});

});
