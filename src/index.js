const app = require("./app");

app.listen(app.get("port"));
console.log("server", app.get("port"));
