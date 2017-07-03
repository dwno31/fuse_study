console.log("hello - context");
var Observable = require("FuseJS/Observable");
var Backend = require("./Backend");

var hikes = Observable();

Backend.getHikes()
  .then(function(newHikes){
    hikes.replaceAll(newHikes);
    console.log(hikes.length);
  })
  .catch(function(error){
    console.log("the error is "+error);
  });

console.log(JSON.stringify(hikes));
console.log(hikes.length);
function updateHike(id, name, location, distance, rating, comments){
  for(var i = 0; i<hikes.length;i++){
    var hike = hikes.getAt(i);
    if(hike.id == id){
      hike.name = name;
      hike.location = location;
      hike.distance = distance;
      hike.rating = rating;
      hike.comments = comments;
      hike.replaceAt(i, hike);
      break;
    }
  }
  Backend.updateHike(id, name, location, distance, rating, comments)
    .catch(function(err){
      console.log("this is an error, "+err);
    });
}

module.exports = {
  hikes:hikes,

  updateHike:updateHike
}
