Template.formTop.events({
  'submit form': function(e) {
    e.preventDefault();

    var str = $(e.target).find('[name=val]').val();
    if(str.length == 34) {
      console.log('address');
      Router.go('addressPage', { addr: str });
    } else if (str.substring(0,6) == '000000') {
      Router.go('blockPage', { strr: str });
    } else if(str.length == 64){
      Router.go('txPage', { tx: str });
    }
  }
});
