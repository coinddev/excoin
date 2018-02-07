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
  return [
    Blocks.find({}, {limit: 100, sort: {height: -1}}),
    Txs.find()
  ];
});

Meteor.publish('transaction', function() {
  return Txs.find();
})

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

Meteor.publish('peers', function() {
  return Peers.find();
});
Meteor.publish('peersAddnode', function() {
  return Peers.find();
});

Meteor.publish('address', function() {
  return [Addresses.find(), Txs.find()];
});

Meteor.publish('sidebarWith', function() {
  return [Settings.find(), Blocks.find()];
})
