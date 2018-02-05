Template.sidebar.helpers({
  masternodes: function(){
    if(Meteor.settings.public.masternode){
      return true;
    } else {
      return false;
    }
  },
  algo: function() {
    return Meteor.settings.public.algo;
  },
  masternode: function() {
    var mn = Settings.findOne();
    return mn.master;
  },
  networks: function() {
    var net = Settings.findOne();
    return net.nethash;
  }
});
