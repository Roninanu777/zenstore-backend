const { authJwt } = require("../middleware/index");
const controller = require("../controllers/user.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Acess-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/public", controller.allAccess);
  app.get("/api/user", [authJwt.verifyToken], controller.userBoard);
  app.get(
    "/api/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  app.get(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
