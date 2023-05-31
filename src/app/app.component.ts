import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Angular_topic';
 hello="Calling function";
 ourText="Learn Angular";
 isloggendIn=true;
 myArray=[
  {
    name:"simran",
    age:21,
    Email:"simrankk887@gmail.com"
  },
  {
    name:"Aarti",
    age:22,
    Email:"aarti@gmail.com"
  },
  {
    name:"vinay",
    age:20,
    Email:"vinay@gmail.com"
  },
  {
    name:"Shubham",
    age:22,
    Email:"shubham@gmail.com"
  }
 ]
//  yourname="simran";
//  isDisabled=true;
//  website={
//   loginTitle:"Customer login panel",
//   logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7F7Ca089qQJSIBKJuWNC2Wnb9nmtsMhvgYtXDa7-9jA&s'
//  }

  getName(data:any){
    alert(data);
  }
  myEvent(val:any){
    alert(val);

  }
//   myText(data:any){
//     alert(data)
//  }
// 

}
// editfun(){
//   this.isDisabled=false;
// }