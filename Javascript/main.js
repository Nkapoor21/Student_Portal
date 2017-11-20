function AddData() {
const a = document.getElementById("name").value;
const b = document.getElementById("rollno").value;
const c = document.getElementById("year").value;
const d = document.getElementById("stream").value;
const fn = ()=> { 
   alert("Wrong Value Entered");
}; 

const nam = ()=> { 
   alert(`Please enter Name`);
}; 

const rol = ()=> { 
   alert(`Please enter Roll no`);
}; 

const st = ()=> { 
   alert(`Please enter Stream`);
}; 

const ye = ()=> { 
   alert(`Please enter Passing Year`);
};   
if(document.student.name.value == "")
 {
  nam();
  return false;
 }
if(document.student.rollno.value == "")
 {
  rol();
  return false;
 }
if(document.student.year.value == "")
 {
  ye();
  return false;
 }
if(document.student.stream.value == "")
 {
  st();
  return false;
 }
if((parseInt(a)!=(a)) && (b!=parseInt(b))) {
fn();
}
else{
 let rows = "";
        const name = document.getElementById("name").value;
        
        
        const roll = document.getElementById("rollno").value;
        const year = document.getElementById("year").value;
        const s = document.getElementById("stream").value;
        rows += `<td>${name}</td><td>${roll}</td><td>${year}</td><td>${s}</td>`;
        const tbody = document.querySelector("#list tbody");
        const tr = document.createElement("tr");

        tr.innerHTML = rows;
        tbody.appendChild(tr)

}
}
var deleteRow=function deleteRow()
{
    const i=prompt("enter the row you want to delete ");


    document.getElementById("list").deleteRow(i);

   
}
var edit=function edit(){
 const p=prompt("enter the row u want to edit");
 window.alert(p);
 const m=document.getElementById("name").value;
 const n=document.getElementById("rollno").value;
 const o=document.getElementById("year").value;
 const q=document.getElementById("stream").value;
 const x=document.getElementById("list").rows[p].cells;
 x[0].innerHTML=m;
 x[1].innerHTML=n;
 x[2].innerHTML=o;
 x[3].innerHTML=q;
}