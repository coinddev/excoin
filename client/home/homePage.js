Template.homePage.helpers({
  blocks: function() {
    return Blocks.find({}, {limit: 10, sort: {height: -1 }});
  },
  txs: function() {
    return Txs.find({}, {limit: 10, sort: {time: -1}});
  }
});

Template.trBlocks.helpers({
  date: function() {
    return moment.unix(this.time).format('MMMM Do YYYY, h:mm:ss a');
  }
});
