const dropArea =document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
input = dropArea.querySelector("input"),
button=dropArea.querySelector("button");

let file;

button.onclick = function(){input.click();}

input.addEventListener("change", function(){
file=this.files[0];
showFile();
dropArea.classList.add("active");
});

dropArea.addEventListener("dragover", (event) => {
event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent="Release to Upload File";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent="Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
showFile();
   
});

function showFile(){
    let fileType=file.type;

let validExtensions =["image/jpeg","image/jpg","image/png"];
if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();

    fileReader.onload = () =>{
        let fileURL = fileReader.result;
        console.log(fileURL);
        let imgTag=`<img src="${fileURL}">`;
        dropArea.innerHTML=imgTag;

    }
    fileReader.readAsDataURL(file);
}
else{
    alert("This is not image File!");
    dropArea.classList.remove("active");
}
}