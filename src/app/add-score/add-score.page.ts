import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.page.html',
  styleUrls: ['./add-score.page.scss'],
})
export class AddScorePage implements OnInit {

  score: number

  constructor(private dataService: DataService, private navCtrl:NavController) { }

  ngOnInit() {
  }

  addScore() {
    this.dataService.addScore(this.score)
    this.navCtrl.back();

  }

}
