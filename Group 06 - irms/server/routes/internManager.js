const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the SLIIT IRMS Application')
})

//Get Intern Manager Details
router.get('/getInternManager', (req, res) => {
    let fetchId = "SELECT id FROM users WHERE usertype = 'intern manager'";
    db.query(fetchId, (err, result) => {
      if(err) throw err;
      if(result.length > 0){
        res.send(result);
      } else{
        res.send({message: "The Intern Manager doesn't exist'"});
      }  
    });  
})

module.exports = router