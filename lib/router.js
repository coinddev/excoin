Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    [
      Meteor.subscribe('confirmation'),
      Meteor.subscribe('transactionvin'),
      Meteor.subscribe('transactionvout'),
      Meteor.subscribe('blocks'),
      Meteor.subscribe('txs'),
      Meteor.subscribe('diff'),
      Meteor.subscribe('masternode'),
      Meteor.subscribe('network'),
      Meteor.subscribe('peers'),
      Meteor.subscribe('peersAddnode')
    ]
  }
});

Router.map(function() {
  this.route('homePage', {
    path: '/',
    waitOn: function() {
      return [
        Meteor.subscribe('blocks'),
        Meteor.subscribe('txs')
      ];
    }
  });

  this.route('txPage', {
    path: '/tx/:tx',
    waitOn: function() {
      return Meteor.subscribe('txs');
    },
    data: function() {
      return Txs.findOne({txid: this.params.tx});
    }
  });

  this.route('blockPage', {
    path: '/block/:strr',
    waitOn: function() {
      return [
        Meteor.subscribe('blocks'),
        Meteor.subscribe('txs')
      ]
    },
    data: function() {
      return Blocks.findOne({hash: this.params.strr});
    }
  });

  this.route('peersPage', {
    path: '/peers',
    waitOn: function() {
      return Meteor.subscribe('peers')
    }
  });

});

Router.onBeforeAction('loading');
