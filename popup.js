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
  let h1Element = document.querySelector("h1");
  h1Element.style.display = "none";
  let dElement = document.getElementById("delete-btn");
  dElement.style.display = "none";
}
let wholeContainerElement = document.getElementById("wholeContainer");
wholeContainerElement.addEventListener("click", () => {
  onHandleNo();
  
 });
 let btnElement = document.getElementById("submit");
 btnElement.innerText = "Reload";
 btnElement.addEventListener("click", () =>{
  let h1Element = document.querySelector("h1");
  h1Element.style.display = "block";
  let dElement = document.getElementById("delete-btn");
  dElement.style.display = "inline";
 })
 
