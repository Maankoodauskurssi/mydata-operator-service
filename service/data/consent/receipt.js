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
            var data = req.body;
            data.consentReceiptType = "receipt";

            var consentReq = new Consent(data);

            consentReq.save(function(err, saved_data) {
                if (err)
                    res.send(err);
                
                var response = {
                    requestId: saved_data._id
                };
                
                res.json(response);
            });
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
            Consent.find(query, function(err, requests) {
            if (err)
                res.send(err);

            res.json(requests);
            
            });
        }
    }
};
