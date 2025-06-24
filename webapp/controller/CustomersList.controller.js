sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/export/library",
    "sap/ui/export/Spreadsheet"
  ], (BaseController,Sorter,Filter,FilterOperator,exportLibrary,Spreadsheet) => {
    "use strict";
  
    return BaseController.extend("stk.starterkit.controller.CustomersList", {
        onInit: function() {
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("RouteCustomersList").attachPatternMatched(this._onPatternMatched, this);
        },
        navigate: function(){
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("RouteMaster");
        },
        onCustomerPress: function(oEvent){
            const oRouter = this.getOwnerComponent().getRouter();
            const sCustomerID= oEvent.getSource().getBindingContext().getObject().CustomerID;
            oRouter.navTo("RouteCustomerDetails",
                 {CustomerID: sCustomerID});

        },
        onCreatePress: function(){
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteCreateCustomer");
        }
        ,
        changeStateInput: function(){
            const oInput = this.byId("companyNameFilterInput");
            const isVisible = oInput.getVisible();
            oInput.setProperty("visible", !isVisible);
        },
        _onPatternMatched: async function () {
            const oModel = this.getOwnerComponent().getModel();
            const oCustomerModel = this.getOwnerComponent().getModel("CustomersProperties");
            const iTableRows = this.getNoCustomers();
              oCustomerModel.setProperty("/noCustomers", iTableRows);
          },
        
          getNoCustomers: function(){
              return this.byId("customersTable").getItems().length;
          },
          
          onSortByCountry: function() {
              
              const oTable = this.byId("customersTable");
              const oBinding = oTable.getBinding("items");
              let aSorter = [];
              const bOpositeValue = oBinding.aSorters[0] ? !oBinding.aSorters[0].bDescending : false;
              const oSorter = new Sorter("Country", bOpositeValue);
              aSorter.push(oSorter);
              oBinding.sort(aSorter);
          },
          onSortByCompanyName: function(){
            const oTable = this.byId("customersTable");
            const oBinding = oTable.getBinding("items");
            let aSorter = [];
            const bOpositeValue = oBinding.aSorters[0] ? !oBinding.aSorters[0].bDescending : false;
            const oSorter = new Sorter("CompanyName", bOpositeValue);
            aSorter.push(oSorter);
            oBinding.sort(aSorter);
            
          },
          setCompanyFilter: function(oEvent){
              let aFilters, oTable, oBinding, oFilter, sCompanyName;
              oTable = this.byId("customersTable");
              oBinding = oTable.getBinding("items");
              aFilters=[];
              sCompanyName = oEvent.getSource().getValue();
              oFilter = new Filter("CompanyName", FilterOperator.EndsWith, sCompanyName);
              aFilters.push(oFilter);
              oBinding.filter(aFilters);
              const iTableRows = this.getNoCustomers();
              oCustomerModel.setProperty("/noCustomers", iTableRows);
          },
          onPressGenerateExcelReport:function(){
              const oModel = this.getOwnerComponent().getModel();//model
              const oServiceUrl = this.getOwnerComponent().getModel().getServiceUrl();//path druga opcja to oModel.getServiceUrl()
              const oEntity = oModel
                              .getServiceMetadata()
                              .dataServices.schema[0].entityType
                              .find((oEntity) => oEntity.name === "Customer").property;
              const aCols = oEntity.map((oProp) => ({
                  label: oProp.name,
                  type: oProp.type,
                  property: oProp.name
              }));
              const oSettings = {
                  workbook: {columns: aCols},
                  dataSource: {
                      type: "OData",
                      dataUrl: `${oServiceUrl}/Customers`,
                      serviceUrl: oServiceUrl,
                      headers: {
                              Accept: "application/json",
                              "Accept-Language": "en",
                              "sap-cancel-on-close": "true",
                              DataServiceVersion: "2.0",
                              Connection: "keep-alive"
                      }
                  },
              fileName: "Customers.xlsx",
              worker: true,
              sizeLimit: 500
              };
              const oSheet = new Spreadsheet(oSettings);
              oSheet.build().finally(function(){
                  oSheet.destroy();
              });
          }
    });
  });