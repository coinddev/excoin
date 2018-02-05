generate = function() {
  var he = Blocks.find({}, {sort: {height: -1}, limit: 100}).fetch();
  return he;
}



Template.chartTpl.rendered = function() {
  var chart = c3.generate({
      bindto: '#chartdiv',
      data: {
        json: generate(),
        keys: {
          x: 'height', // it's possible to specify 'x' when category axis
          value: ['difficulty'],

        },
        type: 'area'
      },
      axis: {
        x: {

        }
      }
  });

  Meteor.setInterval(function(){
    chart.load({
        json: generate(),
        keys: {
          x: 'height', // it's possible to specify 'x' when category axis
          value: ['difficulty']
        }
    });
  }, 2000)
}
