var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ConsentSchema = new Schema({
    consentReceiptType: String,
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

// Consent model, using ConsentSchema, saved into consents MongoDB collection
module.exports = mongoose.model('Consent', ConsentSchema, 'consents');