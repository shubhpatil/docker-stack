const app = require("./src/config/express");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running: http://localhost:${PORT}`));
