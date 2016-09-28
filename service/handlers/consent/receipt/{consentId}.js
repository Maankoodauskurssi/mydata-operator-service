'use strict';
var dataProvider = require('../../../data/consent/receipt/{consentId}.js');
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
     */
    get: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
