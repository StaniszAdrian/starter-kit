sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "../model/formatter",

], (BaseController, Formatter) => {
  "use strict";

  return BaseController.extend("stk.starterkit.controller.CustomerDetails", {
    formatter: Formatter,
    onInit() {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.getRoute("RouteCustomerDetails").attachPatternMatched(this._onPatternMatched, this);
    },
    onNavButtonPress: function () {
      const oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo("RouteCustomersList");
    },
    handleContactDialog: function(action){
      if (!this.pDialog){
        this.pDialog = this.loadFragment({
          name: "stk.starterkit.view.fragments.ContactInfoDialog",
          controller: this
        });
      }
      if(action === "open"){
        this.pDialog.then((oDialog)=>{ 
          oDialog.open();
        });
      }else if (action === "close"){
        this.pDialog.then((oDialog)=>{ 
          oDialog.close();
        });
      }
      
    },
    onPressContactButton: function () {
      this.handleContactDialog("open");
    },
    onPressContactClose: function(){
      this.handleContactDialog("close");
    },
    _onPatternMatched: function (oEvent) {
      const sCustomerID = oEvent.getParameter("arguments").CustomerID;
      this.getView().bindElement({
        path: `/Customers('${sCustomerID}')`,
        parameters: {
          expand: 'Orders,Orders/Order_Details,Orders/Employee,Orders/Customer'
        }
      });
    }
  });
});