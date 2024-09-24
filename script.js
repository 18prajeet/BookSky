//selecting popup box,popup overlay button
var popupoverlay=document.querySelector(".popupoverly")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("addpopupbutton")
  addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="Block"
    
  })

  var cancelpopup=document.getElementById("canb")
  cancelpopup.addEventListener("click",function(){
    event.preventDefault();
    popupoverlay.style.display="None"
    popupbox.style.display="None"
  })
  var  container=document.querySelector(".container")
  var  addbook=document.getElementById("addb")
  var booktitle=document.getElementById("booktitle-box")
  var bookauthor=document.getElementById("bookauthor-box")
  var bookdescription=document.getElementById("book-description")

  addbook.addEventListener("click",function(event){
    event.preventDefault()
       var div=document.createElement("div")
       div.setAttribute("class","bookcontainer")
       div.innerHTML=`<h2>${booktitle.value}</h2>
        <h4>${bookauthor.value}</h4>
        <p>${bookdescription.value}</p>
        <button>Delete</button>`
       container.append(div)
       popupoverlay.style.display="None"
       popupbox.style.display="None"
  })
  deletebook=(event)=>{
   event.target.parentElement.remove()
  }