const express = require("express");
const route = express.Router();
const studentController = require("../controllers/student");
const volunteerController = require("../controllers/volunteer");
const lessonsController = require("../controllers/lesson");
const subjectController = require("../controllers/subject");
const roomController = require("../controllers/room");
const sessionController = require("../controllers/session");
const generalRuleController = require("../controllers/generalRule");
const emailController = require("../controllers/notification/email");
const { profileUpload } = require("../middleware/multer/profileCover");
const { multipleUploads } = require("../middleware/multer/lesson");

/**
 * @description Root Route
 * @method GET /
 */

route.get("/", (req, res) => {
  res.send("server is running !!!");
});
// ================ student router ===================;
// API
route.get("/api/students", studentController.find);
route.post("/api/students", studentController.create);
route.put("/api/students/:id", studentController.update);
route.delete("/api/students/:id", studentController.delete);

// =============== volunteer router ==================
// API
route.post("/api/volunteers", profileUpload.single("profileCover"), volunteerController.create);
route.get("/api/volunteers", volunteerController.find);
route.put("/api/volunteers/:id", profileUpload.single("profileCover"), volunteerController.update);
route.delete("/api/volunteers/:id", volunteerController.delete);
// =============== lesson router ==================
// API
route.post("/api/lessons", multipleUploads, lessonsController.create);
route.get("/api/lessons", lessonsController.find);
route.put("/api/lessons/:id", multipleUploads, lessonsController.update);
route.delete("/api/lessons/:id", lessonsController.delete);
// =============== subject router ==================
// API
route.post("/api/subjects", subjectController.create);
route.get("/api/subjects", subjectController.find);
route.put("/api/subjects/:id", subjectController.update);
route.delete("/api/subjects/:id", subjectController.delete);
// =============== room router ==================
// API
route.post("/api/rooms", roomController.create);
route.get("/api/rooms", roomController.find);
route.put("/api/rooms/:id", roomController.update);
route.delete("/api/rooms/:id", roomController.delete);
// =============== sessions router ==================
// API
route.post("/api/sessions", sessionController.create);
route.get("/api/sessions", sessionController.find);
route.put("/api/sessions/:id", sessionController.update);
route.delete("/api/sessions/:id", sessionController.delete);
// =============== generalRule router ==================
// API
route.post("/api/generalRules", generalRuleController.create);
route.get("/api/generalRules", generalRuleController.find);
route.put("/api/generalRules/:id", generalRuleController.update);
route.delete("/api/generalRules", generalRuleController.delete);
// =============== email router ==================
// API
route.post("/api/email", emailController.send);
route.post("/api/sessionNotify", emailController.sessionNotify);
module.exports = route;
