Template.blockPage.helpers({
  transaction: function() {
    return Txs.find({block: this.hash});
  },
  timer: function() {
    return moment.unix(this.time).format('MMMM Do YYYY, h:mm:ss a');
  }
});
