Template.tx.helpers({
  transactionvin: function() {
    var vout_arr = [];
    var out = this.vout;
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
  transactionvout: function() {
    var vin_arr = [];
    var ins = this.vin;
    var amount = 0;
    var address = '';

    ins.forEach(function(obj){
      if(obj.coinbase) {
        return;
      } else {
        var out = Txs.findOne({txid: obj.txid}).vout;
        console.log(out);
        out.forEach(function(obj){
          if(obj.scriptPubKey.type != 'nonstandard' && obj.scriptPubKey.type != 'nulldata') {
            if(obj.value != 0) {
              address = obj.scriptPubKey.addresses[0];
              amount = amount + obj.value;
            }
          }
        });
      }
    });

    if(address) {
      vin_arr.push({
        address: address,
        amount: amount.toFixed(8)
      });
    } else {
      vin_arr.push({
        address: 'New Coin',
        amount: 'Miner'
      });
    }

    return vin_arr;
  }
});
