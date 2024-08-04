import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: { id: '123', name: 'John Doe' }
  scores = []

  constructor(private router: Router,
    private navController: NavController,
    private navCtrl: NavController,
    private dataService: DataService,
    private alertController: AlertController,
  ) { }

  ngOnInit(): void {
    console.log("Page successfully loadded")
  }

  ionViewDidEnter() {
    const newScores = this.dataService.getScores()
    if (this.scores.length != newScores.length) {
      this.scores = newScores
      this.presentAlert()
    }
    console.log(this.scores)
    console.log("View Did Enter called")
  }

  async presentAlert() {
    const lastItem = this.scores[this.scores.length - 1];
    const alert = await this.alertController.create({
      header: "Score Added",
      message: `You have successfully added ${lastItem}`,
      buttons: ['Ok']
    })
    await alert.present();
  }

  ionViewWillLeave() {
    console.log("Leaving home page")
  }

  goToAbout() {
    this.router.navigate(['/about'])
  }

  goToContact() {
    this.navController.navigateForward(['/contact'])
  }

  goToDetails() {
    this.router.navigate(['/details', 1])
  }

  goToProfile() {
    this.navCtrl.navigateForward(['/profile'], {
      state: { user: { id: '123', name: 'John Doe' } }
    });
  }

  goToAddScore() {
    this.navController.navigateForward('/add-score')
  }



}
