import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private scores: number[] = []

  constructor() { }


  getScores(){
    return this.scores
  }
 
  addScore(score:number){
    this.scores.push(score)
  }
 

}
