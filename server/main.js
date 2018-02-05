import { Meteor } from 'meteor/meteor';


Meteor.startup(() => {

  //download index block
  donwload_block = function(index) {
    Meteor.call('get_rcpcoin_params', 'getblockhash', index, function(err, res){
      if(err)
        console.log(err);
      Meteor.call('get_rcpcoin_params', 'getblock', res.result, function(err, res) {
          if(err) {
            console.log(err);
          } else {
            var block = {
              hash: res.result.hash,
              confirmations: res.result.confirmations,
              size: res.result.size,
              height: res.result.height,
              version: res.result.version,
              merkleroot: res.result.merkleroot,
              time: res.result.time,
              nonce: res.result.nonce,
              bits: res.result.bits,
              difficulty: res.result.difficulty.toFixed(8),
              previousblockhash: res.result.previousblockhash,
              nextblockhash: res.result.nextblockhash
            };

            Blocks.insert(block);

            if(res.result.tx) {
              var tx = res.result.tx;
              tx.forEach(function(obj){
                var tx = {
                  txid: obj,
                  block: res.result.hash,
                  confirmations: res.result.confirmations
                };

                Meteor.call('get_rcpcoin_params', 'getrawtransaction', obj, function(err, res){
                  if(err)
                    console.log(err);
                  Meteor.call('get_rcpcoin_params', 'decoderawtransaction', res.result, function(err, res){
                    if(err)
                      console.log(err);
                    var vin = res.result.vin;
                    var vout = res.result.vout;
                    var amount = 0;
                    vout.forEach(function(obj){
                      amount = amount + obj.value;
                    });
                    var txData = _.extend(tx, {
                      time: block.time,
                      version: res.result.version,
                      locktime: res.result.locktime,
                      amount: amount.toFixed(8),
                      vin: res.result.vin,
                      vout: res.result.vout
                    });
                    Txs.insert(txData);
                  });
                });
              });
            }
          }
        });
    });
  };
  //settings
  infoCoin = function() {
    var data = {};
    Meteor.call('get_rcpcoin_params', 'masternode', 'count', function(err, res){
      if(err) {
        console.log(err);
      return;
      } else {
        //console.log(res);
        data.master = res.result;
      }
    });
    //getnetworkinfo
    Meteor.call('get_rcpcoin', 'getmininginfo', function(err, res){
      if(err)
        return;
      //console.log(res.result.networkhashps);
      data.nethash = res.result.networkhashps;
      if(Settings.find().count() == 0) {
        Settings.insert(data);
      } else {
        var set = Settings.findOne();
        Settings.update(set._id, {$set: data});
      }
    });


  };

  //loading
  loading = function() {
    var oldheight = 0;
    var newheight = 0;

    if(Blocks.find().count() != 0) {
      oldheight = Blocks.findOne({}, {sort: {height: -1}}).height;
    }

    Meteor.call('get_rcpcoin', 'getinfo', function(err, res) {
      if(err) {
        console.log(err);
      } else {
        //console.log(res.result);
        newheight = res.result.blocks;
        if(newheight > oldheight) {
          for(i = oldheight + 1 ; i < oldheight + 2; i++) {
            //console.log('Loading block:', i);
            donwload_block(i);
          }
        } else {
          console.log('ok');
        }
      }
    });
  }


  peerinfo = function() {
    Meteor.call('get_rcpcoin', 'getpeerinfo', function(err, res){
      if(err) {
        console.log(err);
      return;
      } else {
        console.log(res);
        //data.master = res.result;
        var data = {
          peers: res.result
        };

        if(Peers.find().count() == 0) {
          Peers.insert(data);
        } else {
          var set = Peers.findOne();
          Peers.update(set._id, {$set: data});
        }
      }
    });
  };

  peerinfo();
  //loading();
  //donwload_block(111);
  Meteor.setInterval(function(){
    infoCoin();
    loading();
  }, 3000);
});
