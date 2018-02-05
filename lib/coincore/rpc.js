const bitcoin = require('bitcoin');

var client = new bitcoin.Client({
  host: Meteor.settings.public.coinhost,
  port: Meteor.settings.public.coinport,
  user: Meteor.settings.public.coinuser,
  pass: Meteor.settings.public.coinpassword,
  timeout: 30000
});


/*
client.cmd('getblockchaininfo');
*/

Meteor.methods({
  get_rcpcoin: function(comand) {
    var requestSync = Meteor.wrapAsync(function(get, callback) {
      client.cmd(get, function(err, res, resHeaders){
        callback(err, {result: res});
      });
    });

    var result = requestSync(comand);
    return result;
  },

  get_rcpcoin_params: function(comand, params) {
    var requestSync = Meteor.wrapAsync(function(get, get2, callback) {
      client.cmd(get, get2, function(err, res, resHeaders){
        callback(err, {result: res});
      });
    });

    var result = requestSync(comand, params);
    return result;
  },

  get_rcpcoin_params2: function(comand, params, params2) {
    var requestSync = Meteor.wrapAsync(function(get, get2, get3, callback) {
      client.cmd(get, get2, get3, function(err, res, resHeaders){
        callback(err, {result: res});
      });
    });

    var result = requestSync(comand, params, params2);
    return result;
  }
});


/*

== Blockchain ==
getbestblockhash
getblock "hash" ( verbose )
getblockchaininfo
getblockcount
getblockhash index
getblockhashes timestamp
getblockheader "hash" ( verbose )
getblockheaders "hash" ( count verbose )
getchaintips ( count branchlen )
getdifficulty
getmempoolinfo
getrawmempool ( verbose )
getspentinfo
gettxout "txid" n ( includemempool )
gettxoutproof ["txid",...] ( blockhash )
gettxoutsetinfo
verifychain ( checklevel numblocks )
verifytxoutproof "proof"

== Bukake ==
masternodelist ( "mode" "filter" )

== Generating ==
generate numblocks
getgenerate
setgenerate generate ( genproclimit )

== Mining ==
getblocktemplate ( "jsonrequestobject" )
getmininginfo
prioritisetransaction <txid> <priority delta> <fee delta>

== Network ==
getconnectioncount
getnettotals
getnetworkinfo
getpeerinfo


== Rawtransactions ==
getrawtransaction "txid" ( verbose )
*/

/*
client.cmd('getblockhash', 88, function(err, res) {
  if(err) {
    console.log('Err',err);
  } else {
    console.log('Res',res);
  }
});
*/
