'use strict';
var dataProvider = require('../../data/consent/receipt.js');
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
     */
    post: function (req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
