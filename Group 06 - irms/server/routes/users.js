const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
// The cost factor controls how much time is needed to 
// calculate a single BCrypt hash
const saltRounds = 10;
const nodemailer = require("nodemailer");

router.get('/', (req, res) => {
    res.send('Welcome to the SLIIT IRMS Application')
})

//User Registration
router.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const usertype = req.body.usertype;

    db.query(`SELECT id FROM users WHERE email = '${email}'`, (err, result) => {
        if(err) throw err;
        if (result.length>0){
            res.send({message: "This Email is already in use!"});
        } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {

                if(err){
                    console.log(err);
                    res.send({ message: err.message });
                }
                let user = [email, hash, usertype];
                let sql = 'INSERT INTO users (email, password, usertype) VALUES (?,?,?)';
                db.query(sql, user, (err, result) => {
                    if(err) throw err;
                    console.log(result);
                    res.send(result);
                });  
            })
        }
    });   
})

//User Login
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    let sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, email, (err, result) => {
        if(err){
            res.send({err: err});
        }
        if(result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response) => {
                if(response){
                    res.send(result);
                }else{
                    res.send({message: 'Incorrect email or password!'});
                }
            })
        }else{
            res.send({message: "User doesn't exsit"});
        }
    });  
})

//Forgot and Reset Password
router.put('/forgot-password', (req, res) => {
    const email = req.body.email;

    let sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, email, (err, result) => {
        if(err){
            res.send({err: err});
        }
        if(result.length > 0){
            async function main() {

                res.send({message: 'email sent'});
          
                // create reusable transporter object using the default SMTP transport
                let transporter = nodemailer.createTransport({
                  host: "smtp.sendgrid.net",
                  port: 587,
                  secure: false, // true for 465, false for other ports
                  auth: {
                    user: process.env.EMAILNODE_USER, // generated ethereal user
                    pass: process.env.EMAILNODE_PASSWORD, // generated ethereal password
                  },
                  tls: {
                      rejectUnauthorized: false
                  }
                });
    
                     // send mail with defined transport object
                    let info = await transporter.sendMail({
                      from: '"SLIIT Internships" <IRMS@my.sliit.lk>',
                      to: email, // list of receivers
                      subject: "Reset password", // Subject line
                      text: "Reset Password?", // plain text body
                      html: '<b>Click the link to reset the password</b> <br/> <a href="http://localhost:3000/reset-password?email=' + email + '">Reset Password</a>', // html body
                    });
                    
                    console.log("Message sent: %s", info.messageId);
                  
                    // Preview only available when sending through an Ethereal account
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            }
              
              main().catch(console.error);
        }else{
            res.send({message: "The email enterd is not registered with your SLIIT Student account"});
        }
    });  
})

router.put('/reset-password', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    let sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, email, (err, result) => {
        if(err){
            res.send({err: err});
        }
        if(result.length > 0){
            bcrypt.hash(password, saltRounds, (err, hash) => {

                if(err){
                    console.log(err);
                    res.send({ message: err.message });
                }
                let user = [hash];
                let sql = `UPDATE users SET password = ? WHERE email = '${result[0].email}'`;
                db.query(sql, user, (err, result) => {
                    if(err) throw err;
                    console.log(result);
                    res.send({message: "New Password has been added."});
                });  
            })
        }else{
            res.send({message: "User doesn't exsit"});
        }
    });  
})

module.exports = router