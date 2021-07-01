const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    // res.send("<h1>Welcome!</h1>");
    res.render("users/login.ejs");
});

module.exports = router;