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

  getName(data:any){
    alert(data);
  }
  myEvent(val:any){
    alert(val);

  }
//   myText(data:any){
//     alert(data)
//  }

}
