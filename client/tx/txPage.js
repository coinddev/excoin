Template.txPage.helpers({
  timer: function(){
    return moment.unix(this.time).format('MMMM Do YYYY, h:mm:ss a');
  },
  transaction: function() {
    return Txs.find({txid: this.txid});
  }
})
