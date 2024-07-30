

let Headinginput = document.getElementById("headinput");
let Addhead = document.getElementById("addhead");
let Mainhead = document.getElementById("mainheading");

Addhead.addEventListener("click", ()=>{
    gethead();
    Headinginput.value = "";
})

const gethead = ()=>{
   Mainhead.innerHTML = Headinginput.value;
}


let Contentinput = document.getElementById("contentinput");
let Addnote = document.getElementById("addnote");
let mainContent = document.querySelector(".mainContents");

Addnote.addEventListener("click", ()=>{
    getContent();
    Contentinput.value = "";
})



const getContent = ()=>{
    let Maincontent =  document.createElement("p");
  Maincontent.innerHTML = Contentinput.value;
  mainContent.appendChild(Maincontent);

  document.getElementById("save").addEventListener("click", ()=>{
    if ( Mainhead.innerHTML == "" ||  Maincontent.innerHTML == "") {
      document.getElementById("savedata").innerHTML = "Please make some note";
    } else {
      Mainhead.innerHTML = "";
      Maincontent.innerHTML = "";
      document.getElementById("savedata").innerHTML = "Your Data is Saved Susseccfully";
    }
   
  })

  document.getElementById("reset").addEventListener("click", ()=>{
    Mainhead.innerHTML = "";
    Maincontent.innerHTML = "";
    document.getElementById("savedata").innerHTML = "";
  })

}


    





