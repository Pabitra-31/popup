function toggle() {
  let wholeContainerElement = document.getElementById("wholeContainer");
  wholeContainerElement.style.display = "flex";
  let blurElement = document.getElementById("blur");
  blurElement.style.filter = "blur(20px)";
}

function onHandleNo() {
  let wholeContainerElement = document.getElementById("wholeContainer");
  wholeContainerElement.style.display = "none";
  let blurElement = document.getElementById("blur");
  blurElement.style.filter = "none";
}

function onHandleYes() {
  onHandleNo();
  let blurElement = document.getElementById("blur");
  // blurElement.style.display = "none";
  let h1Element = document.querySelector("h1");
  h1Element.style.display = "none";
 let dElement= document.getElementById('delete-btn');
 dElement.style.display="none";
}
