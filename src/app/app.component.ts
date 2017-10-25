import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public playerPos:Array<Object> = [
    {x: 50, y: 50, color:'red'},
    {x: 50, y: 100, color:'green'},
    {x: 100, y: 50, color:'blue'},
    {x: 100, y: 100, color:'yellow'}
  ];
}
