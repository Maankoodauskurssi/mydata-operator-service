var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConsentSchema = new Schema({
    consentType: String,
    Header: {
        version: String,
        jurisdiction: String,
        iat: Number,
        moc: String,
        jti: String,
        publicKey: String,
        policyUrl: String,
        sub: String,
        sensitive: Boolean,
        spiCat: [String],
    },
    DataController: {
        onBehalf: Boolean,
        contact: String,
        org: String,
        address: String,
        email: String,
        phone: String,
    },
    Services: [{
        serviceName: String,
        purposes: [{
            purpose: String,
            consentType: String,
            purposeCategory: [String],
            piiCategory: [String],
            nonCorePurpose: Boolean,
            purposeTermination: String,
            thirdPartyDisclosure: Boolean,
            thirdPartyName: String,
        }],
    }],
});
                        
module.exports = mongoose.model('Consent', ConsentSchema);