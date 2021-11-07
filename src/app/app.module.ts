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

@NgModule({
  declarations: [AppComponent, MainMenuComponent, TerraformingMarsCounterComponent, CluedoCounterComponent, DialogConfirmComponent, TerraformingMarsCounterSettingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
