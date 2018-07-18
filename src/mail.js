var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jah.balo16@gmail.com',
    pass: 'googleisgood'
  }
});

var mailOptions = {
  from: 'jah.balo16@gmail.com',
  to: 'jah.balo16@gmail.com',
  subject: 'Your Itinerary',
  text: 'sending you your itinerary for reminder. Thank you for choosing the Museum of History!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
