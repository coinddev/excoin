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
      Meteor.subscribe('network')
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
    data: function() {
      return Txs.findOne({txid: this.params.tx});
    }
  });

  this.route('blockPage', {
    path: '/block/:strr',
    data: function() {
      if(Blocks.find().count() > this.params.strr) {
        return Blocks.findOne({height: this.params.strr});
      } else {
        return Blocks.findOne({hash: this.params.strr});
      }
    }
  });

});

Router.onBeforeAction('loading');