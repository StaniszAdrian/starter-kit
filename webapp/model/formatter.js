sap.ui.define([],
function(){
    "use strict";
        return{
            formatName: function(sFirstName, sLastName){
                if(sFirstName.includes(" ")){
                    const aSplitName = sFirstName.split(" ");
                    return `${aSplitName[0].charAt(0)}. ${aSplitName[1].charAt(0)}. ${sLastName}`;
                }
                return `${sFirstName[0]}. ${sLastName}`;
            },
            countOrders: function (aOrders) {
                return Array.isArray(aOrders) ? aOrders.length : "Brak danych";
            }
        };
        
});