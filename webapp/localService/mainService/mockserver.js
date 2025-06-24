sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/base/Log"
], (MockServer, Log) => {
    "use strict";

    return {
        /**
         * Initializes the mock server.
         * You can configure the delay with the URL parameter "serverDelay".
         * The local mock data in this folder is returned instead of the real data for testing.
         * @public
         */
        init() {
            // create
            const oMockServer = new MockServer({
                rootUri: "/V2/Northwind/Northwind.svc/"
            });

            const oUrlParams = new URLSearchParams(window.location.search);

            MockServer.config({
                autoRespond: true,
                autoRespondAfter: oUrlParams.get("serverDealy") || 999
            });

            // simulate against the metadata and mock data
            oMockServer.simulate("../localService/metadata.xml", {
                sMockdataBaseUrl: "../localService/mockdata",
                bGenerateMissingMockData: true
            });

            // start
            oMockServer.start();

            Log.info("Running the app with mock data");
        }
    };
});