import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CluedoCounterComponent } from './components/cluedo-counter/cluedo-counter.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TerraformingMarsCounterSettingsComponent } from './components/terraforming-mars-counter-settings/terraforming-mars-counter-settings.component';
import { TerraformingMarsCounterComponent } from './components/terraforming-mars-counter/terraforming-mars-counter.component';

const routes: Routes = [
  {
    path: 'main-menu',
    component: MainMenuComponent,
  },
  {
    path: 'terraforming-mars',
    component: TerraformingMarsCounterComponent,
  },
  {
    path: 'terraforming-mars/settings',
    component: TerraformingMarsCounterSettingsComponent,
  },
  {
    path: 'cluedo',
    component: CluedoCounterComponent,
  },
  {
    path: '',
    redirectTo: 'main-menu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
