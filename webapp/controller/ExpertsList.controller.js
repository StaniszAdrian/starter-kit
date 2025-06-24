sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
   
], (Controller, Formatter) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.ExpertsList", {
        formatter: Formatter,
        onInit: function() {
           
        },
        onMotivate: function(oEvent){
            const oEmployee = oEvent.getSource().getBindingContext().getObject();
            const sEmail = "adi.stanisz@gmail.com";
            const sSubject = "xdxdxdxd"
            const sBody = `Dear ${oEmployee.FirstName},\n You doing great job man!!\n Best Regards\n Your Adzior`;

            $.ajax({
                url: "evilinsult/generate_insult.php",
                data: {
                    lang: "en",
                    type: "json"
                },
                success: (oResposne) => {
                    const sBody = oResposne.insult;
                    sap.m.URLHelper.triggerEmail(sEmail,sSubject,sBody);

                }
            })
        }
       
    });
});