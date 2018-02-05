Template.peersPage.helpers({
  peers: function() {
    return Peers.findOne().peers;
  },
  peersAddnode: function() {
    return Peers.findOne().peers;
  }
});
