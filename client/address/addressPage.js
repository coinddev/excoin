Template.addressPage.helpers({
  address: function() {
    var txi = Addresses.findOne({addres: this.addres});
    return Txs.find({txid: { $in: txi.tx }});
  }
});
