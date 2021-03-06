/*function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
})
*/
function loadJSON(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
      resolve(response.json());
    }
      else {
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("data.json");
  newFile.then(data=>{
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  Achievements(data.Achievements);
})
var childTwo=document.querySelector(".childtwo");
function career(careerObj)
{
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="career objective";
  childTwo.appendChild(careerHeading);
  var hr=document.createElement("hr");
childTwo.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=careerObj.info;
  childTwo.appendChild(p);
}
function education(edu){
  var educationheading=document.createElement("h2");
  educationheading.textContent="educational qualifications";
  childTwo.appendChild(educationheading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  for(var i=0;i<edu.length;i++){
  eduH3=document.createElement("h3");
  eduH3.textContent=edu[i].degree;
  childTwo.appendChild(eduH3);
  var eduUl=document.createElement("ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduUl.appendChild(eduLi);
  childTwo.appendChild(eduUl);
  var eduLi2=document.createElement("li");
  eduLi2.textContent=edu[i].data;
  eduUl.appendChild(eduLi2);
  childTwo.appendChild(eduUl);
}
}
function skills(skillInfo){
  var educationheading=document.createElement("h2");
  educationheading.textContent="Technical Skills";
  childTwo.appendChild(educationheading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  var skillTable=document.createElement("table");
  skillTable.border="1";
  childTwo.appendChild(skillTable);
  var tableData="";
  for(i=0;i<skillInfo.length;i++){
    tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>";
  }
  skillTable.innerHTML=tableData;
}
function Achievements(achInfo) {
  var educationheading=document.createElement("h2");
  educationheading.textContent="Achievements";
  childTwo.appendChild(educationheading);
  var hr=document.createElement("hr");
  childTwo.appendChild(hr);
  var ul=document.createElement("ul");
  childTwo.appendChild(ul);
  var li="";
  for(var i=0;i<achInfo.length;i++)
  {
    li+="<li>"+achInfo[i].info+"</li>";
    ul.innerHTML=li;
  }
}
