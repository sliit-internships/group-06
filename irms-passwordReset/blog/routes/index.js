//send email
function sendEmail(email, token) {
  var email = email;
  var token = token;

  //for gmail
  // var mail = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "", // Your email id
  //     pass: "", // Your password
  //   },
  // });

  //for outlook
  var mail = nodemailer.createTransport("SMTP", {
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
        user: "",
        pass: ""
    },
    // tls: {
    //     ciphers:'SSLv3'
    // }
});

  var mailOptions = {
    from: "irms@sliit.lk",
    to: email,
    subject: "Reset Password Link - IRMS",
    html:
      '<p>You requested for reset password, kindly use this <a href="http://localhost:8081/reset-password?token=' +
      token +
      '">link</a> to reset your password</p>',
  };

  mail.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(1);
    } else {
      console.log(0);
    }
  });
}

/* send reset password link in email */
router.post("/reset-password-email", function (req, res, next) {
  var email = req.body.email;

  //console.log(sendEmail(email, fullUrl));

  connection.query(
    'SELECT * FROM users WHERE email ="' + email + '"',
    function (err, result) {
      if (err) throw err;

      var type = "";
      var msg = "";

      console.log(result[0]);

      if (result[0].email.length > 0) {
        var token = randtoken.generate(20);

        var sent = sendEmail(email, token);

        if (sent != "0") {
          var data = {
            token: token,
          };

          connection.query(
            'UPDATE users SET ? WHERE email ="' + email + '"',
            data,
            function (err, result) {
              if (err) throw err;
            }
          );

          type = "success";
          msg = "The reset password link has been sent to your email address";
        } else {
          type = "error";
          msg = "Something goes to wrong. Please try again";
        }
      } else {
        console.log("2");
        type = "error";
        msg = "The Email is not registered with us";
      }

      req.flash(type, msg);
      res.redirect("/");
    }
  );
});

/* update password to database */
router.post("/update-password", function (req, res, next) {
  var token = req.body.token;
  var password = req.body.password;

  connection.query(
    'SELECT * FROM users WHERE token ="' + token + '"',
    function (err, result) {
      if (err) throw err;

      var type;
      var msg;

      if (result.length > 0) {
        var saltRounds = 10;

        // var hash = bcrypt.hash(password, saltRounds);

        bcrypt.genSalt(saltRounds, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            var data = {
              password: hash,
            };

            connection.query(
              'UPDATE users SET ? WHERE email ="' + result[0].email + '"',
              data,
              function (err, result) {
                if (err) throw err;
              }
            );
          });
        });

        type = "success";
        msg = "Your password has been updated successfully";
      } else {
        console.log("2");
        type = "success";
        msg = "Invalid link; please try again";
      }

      req.flash(type, msg);
      res.redirect("/");
    }
  );
});
