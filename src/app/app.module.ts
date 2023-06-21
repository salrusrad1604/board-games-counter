import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CluedoCounterComponent } from './components/cluedo-counter/cluedo-counter.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { TerraformingMarsCounterComponent } from './components/terraforming-mars-counter/terraforming-mars-counter.component';
import { SharedModule } from './shared/shared.module';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { TerraformingMarsCounterSettingsComponent } from './components/terraforming-mars-counter-settings/terraforming-mars-counter-settings.component';
import { PhaseTenCounterComponent } from './components/phase-ten-counter/phase-ten-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TerraformingMarsCounterComponent,
    CluedoCounterComponent,
    DialogConfirmComponent,
    TerraformingMarsCounterSettingsComponent,
    PhaseTenCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
