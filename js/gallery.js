function upDate(previewPic){
  document.getElementById('image').style.backgroundImage = "url("+previewPic.src+")";
  document.getElementById('image').innerHTML = previewPic.alt; 
}

function unDo(){
  document.getElementById('image').style.backgroundImage = "none";
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function setTabIndices(){
  currentImages = document.querySelectorAll(".preview");
    for(var i=0; i<currentImages.length; i++){
    console.log("Image "+i);
    currentImages[i].setAttribute("tabindex","0");
  }
}