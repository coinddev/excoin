Template.formTop.events({
  'submit form': function(e) {
    e.preventDefault();

    var str = $(e.target).find('[name=val]').val();

    var index = Blocks.find().count();

    if(str < index) {

    } else if (str.substring(0,6) == '000000') {
      Router.go('blockPage', { strr: str });
    } else if(str.length == 32) {
      //Router.go('addressPage', { address: str });
    } else if(str.length == 64){
      Router.go('txPage', { tx: str });
    }
  }
});
