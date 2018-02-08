Template.tx.helpers({
  transactionout: function() {
    var vout_arr = [];
    var out = this.vout;
    //console.log('out', out);
    out.forEach(function(obj){
      if(obj.scriptPubKey.type != 'nonstandard' && obj.scriptPubKey.type != 'nulldata') {
        vout_arr.push({
          address: obj.scriptPubKey.addresses[0],
          amount: obj.value.toFixed(8),
          n: obj.n
        });
      }
    });
    return vout_arr;
  },
  transactionvin: function() {
    var vin_arr = [];
    var ins = this.vin;
    var amount = 0;
    var address = '';

    //console.log('this',this);

    ins.forEach(function(obj){
      if(obj.coinbase) {
        return;
      } else {
        var out = Txs.findOne({txid: obj.txid}).vout;
        //console.log(out);
        out.forEach(function(x){
          if(x.scriptPubKey.type != 'nonstandard' && x.scriptPubKey.type != 'nulldata') {
            vin_arr.push({
              address: x.scriptPubKey.addresses[0],
              amount: x.value.toFixed(8),
              n: x.n
            });
          };
        });
      }
    });

    if(vin_arr.length == 0) {
      vin_arr.push({
        address: 'Generate',
        amount: 'Mining'
      });
    }

    return vin_arr;
  }
});
