Meteor.publish('confirmation', function() {
  return Blocks.find({}, {limit: 1, sort: {height: -1}});
});

Meteor.publish('carts', function() {
  return Blocks.find({}, {limit: 100, sort: {height: -1}});
});

Meteor.publish('transactionvout', function() {
  return Txs.find();
});

Meteor.publish('transactionvin', function() {
  return Txs.find();
});

Meteor.publish('blocks', function() {
  return Blocks.find({}, {limit: 100, sort: {height: -1}});
});

Meteor.publish('txs', function() {
  return Txs.find({}, {limit: 100, sort: {confirmation: 1}});
});

Meteor.publish('diff', function() {
  return Blocks.find({}, {limit: 1, sort: {height: -1}});
});

Meteor.publish('masternode', function() {
  return Settings.find();
});
Meteor.publish('network', function() {
  return Settings.find();
});
