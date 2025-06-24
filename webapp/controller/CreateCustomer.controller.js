sap.ui.define([
    "sap/ui/core/mvc/Controller",
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CreateCustomer", {
        onInit: function() {
        }, 
        onCreatePress: function(){
            const sID = this.byId("CustomerID").getValue();
            const sCompanyName = this.byId("CustomerName").getValue();
            const oModel = this.getView().getModel();
            oModel.create("/Customer",{
                CustomerID : sID,
                CompanyName : sCompanyName
            }, {
                succes: (oScuccess) => {
                    console.info(`Everything fine, New Employee added\n ${oScuccess}`)
                },
                error : (oError) => {
                    console.info(`Something went wrong: \n ${oError.message} and HTTP ${oError.code}`);
                }
            });
        }       
    });
});