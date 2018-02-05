Template.blockPage.helpers({
  transaction: function() {
    return Txs.find({block: this.hash});
  }
});
