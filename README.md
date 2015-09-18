[![Build](https://img.shields.io/travis/sapbuild/node-sap-mailer.svg?style=flat-square)](http://travis-ci.org/sapbuild/node-sap-mailer)
[![Version](https://img.shields.io/npm/v/node-sap-mailer.svg?style=flat-square)](https://npmjs.org/package/node-sap-mailer)
[![Dependency Status](https://david-dm.org/sapbuild/node-sap-mailer.svg)](https://david-dm.org/sapbuild/node-sap-mailer)
[![devDependency Status](https://david-dm.org/sapbuild/node-sap-mailer/dev-status.svg)](https://david-dm.org/sapbuild/node-sap-mailer#info=devDependencies)
[![Coverage](https://img.shields.io/coveralls/sapbuild/node-sap-mailer/master.svg?style=flat-square)](https://coveralls.io/r/sapbuild/node-sap-mailer?branch=master)
node-sap-mailer
===============

This service gives the ability to easily send emails. This service is based on Nodemailer node package.

###Nodemailer transport options

```javascript
//./config.js
module.exports = {
     host: "mail.example.com",
      port: 25,
      debug: true,
      tls: {
        rejectUnauthorized: false
    }
};
```



# BUILD on GitHub

[Click here](https://github.com/SAP/BUILD) to visit the central BUILD project on GitHub, where you can find out more!

[Click here](https://github.com/SAP/BUILD/blob/master/Contributing.md) to view the BUILD Contribution Guidelines. 



### How to use Mailer service in module 
```javascript
//./config.js
var Mailer = require('norman-common-server').Mailer;
Mailer.sender = 'no-reply@mail.example.com';
mailer.send(mailOptions, function onError(error) {
    console.log('Error', error);
}, function onSuccess(info) {
   console.log('Success', info);
});
```

### mailOptions: 
```javascript
// setup an e-mail
var mailOptions = {
    from: 'foo@mail.example.com', // sender address
    to: 'bar@mail.example.com, baz@mail.example.com', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world</b>' // html body
};
```
For more please see the https://github.com/andris9/Nodemailer example for mailOptions.

