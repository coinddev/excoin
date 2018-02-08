Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('sidebarWith'),
      Meteor.subscribe('chart'),
      Meteor.subscribe('blocks'),
      Meteor.subscribe('txs'),
      Meteor.subscribe('transaction'),
      Meteor.subscribe('address')
    ];
  }
});

Router.map(function() {
  this.route('homePage', {
    path: '/'
  });

  this.route('txPage', {
    path: '/tx/:tx',
    data: function() {
      return Txs.findOne({txid: this.params.tx});
    }
  });

  this.route('blockPage', {
    path: '/block/:obj',
    data: function() {
      return Blocks.findOne({hash: this.params.obj});
    }
  });

  this.route('addressPage', {
    path: '/address/:addr',
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
