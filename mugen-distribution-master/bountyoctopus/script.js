document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 500, 
  	timeBetweenNPCs: 3200, npcCollisionRadius: 300, actionDuration: 600, jumpHeight: 350});
});