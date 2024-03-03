require('dotenv');

const auth = {
    type: 'OAuth2',
    user: 'kanhatokanhaiya@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
};

const mailOptions = {    
    to: 'kanhatokanhaiya@gmail.com',
    from: 'kanhatokanhaiya@gmail.com',
    subject: 'Gmail API using Node JS',
};

module.exports = {
    auth,
    mailOptions
}