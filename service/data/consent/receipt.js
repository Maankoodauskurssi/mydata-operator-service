'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /consent/receipt
 */
module.exports = {
    /**
     * summary: 
     * description: Creates a new consent receipt.
     * parameters: 
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
                path: '/consent/receipt',
                operation: 'post',
                response: '200'
            }, callback);
            
        }
    },
    /**
     * summary: 
     * description: Gets detailed consent receipt data.
     * parameters: subjectId
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
                path: '/consent/receipt',
                operation: 'get',
                response: '200'
            }, callback);
            
        }
    }
};
