'use strict';
var dataProvider = require('../../../data/consent/request/{requestId}.js');
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
