import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  {
    path: 'main-menu',
    component: MainMenuComponent,
  },
  {
    path: '',
    redirectTo: 'main-menu',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
