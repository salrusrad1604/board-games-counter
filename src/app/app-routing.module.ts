import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CluedoCounterComponent } from "./components/cluedo-counter/cluedo-counter.component";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { TerraformingMarsCounterSettingsComponent } from "./components/terraforming-mars-counter-settings/terraforming-mars-counter-settings.component";
import { TerraformingMarsCounterComponent } from "./components/terraforming-mars-counter/terraforming-mars-counter.component";
import { PhaseTenCounterComponent } from "./components/phase-ten-counter/phase-ten-counter.component";
import { PhaseTenMasterCounterComponent } from "./components/phase-ten-master-counter/phase-ten-master-counter.component";

const routes: Routes = [
  {
    path: "main-menu",
    component: MainMenuComponent,
  },
  {
    path: "terraforming-mars",
    component: TerraformingMarsCounterComponent,
  },
  {
    path: "terraforming-mars/settings",
    component: TerraformingMarsCounterSettingsComponent,
  },
  {
    path: "cluedo",
    component: CluedoCounterComponent,
  },
  {
    path: "phase-ten-master",
    component: PhaseTenMasterCounterComponent,
  },
  {
    path: "phase-ten",
    component: PhaseTenCounterComponent,
  },
  {
    path: "",
    redirectTo: "main-menu",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "main-menu",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
