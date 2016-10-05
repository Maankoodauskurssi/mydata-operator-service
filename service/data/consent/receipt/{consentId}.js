'use strict';
var Consent = require('../../../models/Consent.js');
/**
 * Operations on /consent/receipt/{consentId}
 */
module.exports = {
    /**
     * summary: 
     * description: Gets full information about the consent receipt and its status, determined by the consentId parameter.

     * parameters: consentId
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            var query;
            if ( req.params.consentId !== undefined)
                query = { 'jti': req.params.consentId, 'consentReceiptType': 'receipt'};

            Consent.find(query, function(err, requests) {
                if (err)
                    res.send(err);

                res.json(requests);
            });
        }
    }
};
