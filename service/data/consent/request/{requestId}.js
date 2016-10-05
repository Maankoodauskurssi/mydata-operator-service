'use strict';
var Mockgen = require('../../mockgen.js');
var Consent = require('../../../models/Consent.js');

/**
 * Operations on /consent/request/{requestId}
 */
module.exports = {
    /**
     * summary: 
     * description: Gets detailed consent request information, defined by consent ID.

     * parameters: requestId
     * produces: 
     * responses: 200, 404
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            var query;
            if ( req.params.requestId !== undefined)
                query = { 'jti': req.params.requestId, 'consentReceiptType': 'request'};

            Consent.find(query, function(err, requests) {
                if (err)
                    res.send(err);

                res.json(requests);
            });
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
