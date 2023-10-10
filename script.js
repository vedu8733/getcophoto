let button = document.getElementById("button");
button.addEventListener("click",(e)=>{
   e.preventDefault()

   let inputtext = document.getElementById("inputtext").value.trim();

  // console.log( inputtext)
  if(inputtext==""){
    console.log("error");
    alert("plz enter Something to  get Photo")

  }
 
  else{
let img = document.getElementById("img")
img.src=`img/${inputtext}.avif`
let audio = new Audio("tune.wav")

audio.play()

  }

})

window.addEventListener("load",(e)=>{
  // alert("looadd")
  inputtext.value="";
})

