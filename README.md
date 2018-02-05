# EXcoin - Altcoin BlocExplorer v.0.1.0

Settings
--
.deploy/settings.json
```
"ver": "0.1.0",
"rev": "demo",
"name": "BUKAKE", //name
"ticker": "BKK", // tiker
"type": "pow", // not work
"algo": "x11", // algo
"masternode": true, // true / false
"website": "https://www.website.com", //not work
"forum": "https://bitcointalk.org",
"github": "https://github.com",
"coinhost": "localhost",
"coinport": "8001",
"coinuser": "username",
"coinpassword": "password",
"updatetime": "320" // not work
```

Install Meteor-UP (MUP)
--
[Meteor-UP DOC](http://meteor-up.com/docs.html)
```sh
npm install mup -g
git clone https://github.com/coinddev/excoin.git
cd excoin
mkdir .deploy && cd .deploy
mup init
vi mup.js
vi settings.json
mup setup
mup deploy
```
