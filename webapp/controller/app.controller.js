sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("mm.controller.app", {
		
		onAfterDetailNavigate: function(oEvent) {
			oEvent.getSource().hideMaster();
		},
		
		showMaster: function(oEvent) {
			oEvent.getSource().showMaster();
		}
		
	});

});