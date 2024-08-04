import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddScorePage } from './add-score.page';

const routes: Routes = [
  {
    path: '',
    component: AddScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddScorePageRoutingModule {}
