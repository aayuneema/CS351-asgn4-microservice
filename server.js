const express = require('express');
const app = express();
const leapYearRoute = require("./routes/leapYear");

app.use(express.json());
app.use("/", leapYearRoute);

const port = 8082;
app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});