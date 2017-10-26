import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  public playerStats:Array<Object> = [
    {nickname: 'player1', kills: 25, deaths: 5, team:'red'},
    {nickname: 'player2', kills: 20, deaths: 8, team:'green'},
    {nickname: 'player3', kills: 8, deaths: 12, team:'blue'},
    {nickname: 'player4', kills: 4, deaths: 27, team:'yellow'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
