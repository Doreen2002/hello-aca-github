const toggle =()=>
{
let text = document.getElementById('toggledText')
  if (text.style.display === "none") {
    text.style.display = "block";
  } 
  else {
    text.style.display = "none";
  }
}