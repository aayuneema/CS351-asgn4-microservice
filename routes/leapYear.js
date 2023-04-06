const router = require("express").Router();

router.get("/isLeapYear", async (req, res) => {
    try {
        console.log("Request received");
        var yearAsInt = parseInt(req.body.year);
        if (yearAsInt % 4 === 0) {
            if (yearAsInt % 100 === 0) {
                if (yearAsInt % 400 === 0) {
                    return res.status(200).json(yearAsInt + " is a leap year!");
                }
                else {
                    return res.status(200).json(yearAsInt + " is not a leap year!"); 
                }
            }
            else {
                return res.status(200).json(yearAsInt + " is a leap year!");
            }
        }
        else {
            return res.status(200).json(yearAsInt + " is not a leap year!");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
