const DriversController = require("../controllers/drivers_controller");

module.exports = (app) => {
  app.get("/api", DriversController.gretting);
  app.post("/api/drivers", DriversController.create);
};
