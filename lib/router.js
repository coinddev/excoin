Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    //Meteor.subscribe('masternode'),
    Meteor.subscribe('sidebarWith')

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
      return Meteor.subscribe('transaction');
    },
    data: function() {
      return Txs.findOne({txid: this.params.tx});
    }
  });

  this.route('blockPage', {
    path: '/block/:strr',
    waitOn: function() {
      return Meteor.subscribe('blocks');
    },
    data: function() {
      return Blocks.findOne({hash: this.params.strr});
    }
  });

  this.route('addressPage', {
    path: '/address/:addr',
    waitOn: function() {
      return Meteor.subscribe('address');
    },
    data: function() {
      return Addresses.findOne({addres: this.params.addr});
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
