function upDate(previewPic){
  document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
  document.getElementById('image').innerHTML = previewPic.alt; 
}

function unDo(){
  document.getElementById('image').style.backgroundImage = "none";
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

/*function setImages(){
  options = ["cliff_plants.jpg","dry_hillside_trail.jpg","rainbow_beach.jpg","shaded_trail.jpg","stone_stairs.jpg","sunny_pines.jpg"];
  descriptions = [
    "shrubs growing out of a cliff",
    "hiking trail on a hillside with dry grasses and pine trees",
    "beach with a rainbow in the distance",
    "shaded trail in a pine forest",
    "stairs carved into a rocky terrain",
    "dry pine forest in the sunlight"
  ];
  currentImages = document.querySelectorAll(".flex img");
  for(var i=0; i<currentImages.length; i++){
    console.log("Image "+i);
    rand = Math.floor(Math.random()*options.length);
    randomImg = "images/"+options[Math.floor(Math.random()*options.length)];
    currentImages[i].src = randomImg;
    currentImages[i].setAttribute("tabindex","0");
  }
}*/

function setTabIndices(){
  currentImages = document.querySelectorAll(".preview img");
    for(var i=0; i<currentImages.length; i++){
    console.log("Image "+i);
    currentImages[i].setAttribute("tabindex","0");
  }
}