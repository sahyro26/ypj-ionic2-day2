import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddScorePageRoutingModule } from './add-score-routing.module';

import { AddScorePage } from './add-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddScorePageRoutingModule
  ],
  declarations: [AddScorePage]
})
export class AddScorePageModule {}
