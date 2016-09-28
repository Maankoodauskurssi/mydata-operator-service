'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /consent/receipt/{consentId}
 */
module.exports = {
    /**
     * summary: 
     * description: Gets full information about the consent receipt and its status, determined by the consent_id parameter.

     * parameters: consentId
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/consent/receipt/{consentId}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
