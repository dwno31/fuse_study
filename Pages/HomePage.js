console.log("js start on ");
var hikes = require("Modules/Context");
console.log("back to HMPAGE");
console.log(hikes.length);
function gotoHike(arg) {
  var hike = arg.data;
  router.push("editHike",hike);
}

module.exports = {
  hikes: Context.hikes,
  gotoHike: gotoHike
};
