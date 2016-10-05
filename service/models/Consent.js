var Schema = mongoose.Schema;

var ReceiptSchema   = new Schema({
    type: String
});

module.exports = mongoose.model('Consent', ConsentSchema);