Template.layout.helpers({
  sidebarWith: function() {
    return Blocks.findOne({}, {sort: {height: -1}});
  },
  name: function() {
    return Meteor.settings.public.name;
  },
  github: function() {
    return Meteor.settings.public.github;
  },
  ver: function() {
    return Meteor.settings.public.ver + "-" + Meteor.settings.public.rev;
  }
});
