//sidebar
Meteor.publish('sidebarWith', function() {
  return [
    Settings.find(),
    Blocks.find({}, {limit: 1, sort: {height: -1}})
  ];
});

//charts
Meteor.publish('chart', function() {
  return Blocks.find({}, {limit: 100, sort: {height: -1}});
});

//homePage
Meteor.publish('blocks', function() {
  return Blocks.find({}, {limit: 10, sort: {height: -1}});
});
Meteor.publish('txs', function() {
  return Txs.find({}, {limit: 10, sort: {confirmations: 1}});
});

//transaction
Meteor.publish('transaction', function(obj) {
  return Txs.find();
});


//address
Meteor.publish('address', function() {
  return [Addresses.find(), Txs.find()];
});


Meteor.publish('confirmation', function() {
  return Blocks.find({}, {limit: 1, sort: {height: -1}});
});

Meteor.publish('transactionvout', function(block) {
  return Txs.find({hash: block});
});

Meteor.publish('transactionvin', function() {
  return Txs.find();
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
