'use strict';

module.exports = {
    mail: {
        sender: 'do.not.reply@sap.com',
        smtp: {
            host: 'mail.sap.corp',
            port: 25,
            debug: true,
            tls: {
                // ca : 'path/to/CA_mailserver/cert.pem'
                rejectUnauthorized: false
            }
        }
    }
};
