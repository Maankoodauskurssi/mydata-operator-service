'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /consent/request/{requestId}
 */
module.exports = {
    /**
     * summary: 
     * description: Creates a new request for a consent.

     * parameters: requestId
     * produces: 
     * responses: 200, 404
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/consent/request/{requestId}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/consent/request/{requestId}',
                operation: 'get',
                response: '404'
            }, callback);
        }
    }
};
