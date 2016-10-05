'use strict';
var Mockgen = require('../mockgen.js');
var Consent = require('../../models/Consent.js');

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
            var data = req.body;
            data.consentReceiptType = "request";

            var consentReq = new Consent(data);

            consentReq.save(function(err, saved_data) {
                if (err)
                    res.send(err);
                
                var response = {
                    requestId: saved_data._id,
                    status: "pending"
                };
                
                res.json(response);
            });
        }
    }
};
