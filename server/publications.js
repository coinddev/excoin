Meteor.publish('confirmation', function() {
  return Blocks.find();
});

Meteor.publish('transactionvout', function() {
  return Txs.find();
});

Meteor.publish('transactionvin', function() {
  return Txs.find();
});

Meteor.publish('blocks', function() {
  return Blocks.find();
});

Meteor.publish('txs', function() {
  return Txs.find();
});

Meteor.publish('diff', function() {
  return Blocks.find();
});

Meteor.publish('masternode', function() {
  return Settings.find();
});
Meteor.publish('network', function() {
  return Settings.find();
});
