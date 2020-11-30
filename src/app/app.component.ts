import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileContent: string="";

  public onChange(fileList: FileList): void {
    let file = fileList[0];
      

    let fileReader: FileReader = new FileReader();
    let self = this;
     var i=0;
     var filecont: string;

    fileReader.onloadend = function(x) {

     self.fileContent= fileReader.result;

     const fo= self.fileContent.split("\n");

     for(i=0;i<fo.length;i++){
     if(fo[i].startsWith("Error:")){
      console.log(fo[i]);
      
      filecont=fo[i];
      console.log(filecont)  
     }
   }
    };
    fileReader.readAsText(file);
  }
// This fucntion is to print exception presnt in file

  exception(){
    let fileReader: FileReader = new FileReader();
    var k=0;
    var n=0;
    let self=this;
    var content: string="";
    let data1 : string[]=[];
    let data2 : string[]=[];
  
    var x:string;
  
    self.fileContent.trim()
    const jk= self.fileContent.split("\n");
    for(k=0;k<jk.length;k++){
       
       if(jk[k].includes("Exception:")){ 
          data2.push("<br>"+jk[k]+"<br>");    
  
        }
        
  }
  self.content = fileReader.result;
  
  var xl= data2.toString();
  console.log(data2)
  document.getElementById("exce").innerHTML = xl; 
}

content(){
  let fileReader: FileReader = new FileReader();

  var j=0;
  let self=this;
  var filecontt: string="";
  let data : string[]=[];
  var x:string;

  self.content = fileReader.result;

  const jo= self.fileContent.split("\n");
  console.log(jo);


  var x= jo.toString();
document.getElementById("info").innerHTML = x;
}

// This fucntion is to print Error presnt in file
errors(){
  
  let fileReader: FileReader = new FileReader();
  var k=0;
  var n=0;
  let self=this;
  var content: string="";
  let data1 : string[]=[];
  let data2 : string[]=[];

  var x:string;

  self.fileContent.trim()
  const jk= self.fileContent.split("\n");
  for(k=0;k<jk.length;k++){
     
     if(jk[k].includes("Error:")){ 
        data2.push("<br>"+jk[k]+"<br>");    

      }
}
self.content = fileReader.result;

var xl= data2.toString();
console.log(data2)
document.getElementById("exce").innerHTML = xl; 
}

onEnter(value: string){
  let fileReader: FileReader = new FileReader();
  var k=0;
  let self=this;
  var content: string="";
  let data1 : string[]=[];
  var x:string;
  const jk= self.fileContent.split("\n");

  for(k=0;k<jk.length;k++){
     if(jk[k].startsWith(value)){      
      content=jk[k];
      self.content = fileReader.result;
      console.log(jk[k]);
      data1.push("<br>"+jk[k]+"<br>");
        }
}

var xl= data1.toString();
console.log(data1)

document.getElementById("searching").innerHTML=xl; 
// return xl;

}

// This fucntion is to reload the browser page

reloadPage() {
  location.reload();
}
 
}
