sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet"
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.Master", {
        onInit: function() {
           
        },
        navigate: function(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteCustomersList");
        },
        navigateToExperts: function(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteExpertsList");
        }
        
    });
});