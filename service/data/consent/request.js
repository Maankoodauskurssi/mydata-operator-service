'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /consent/request
 */
module.exports = {
    /**
     * summary: 
     * description: Creates a new request for a consent.
     * parameters: request
     * produces: 
     * responses: 200
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/consent/request',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
