import { Component } from '@angular/core';
import { PhaseTenCounterService } from './services/phase-ten-counter.service';

@Component({
  selector: 'app-phase-ten-counter',
  templateUrl: './phase-ten-counter.component.html',
  styleUrls: ['./phase-ten-counter.component.scss'],
})
export class PhaseTenCounterComponent {
  formData = this.phaseTenCounterService.getData();

  constructor(private phaseTenCounterService: PhaseTenCounterService) {}

  changeData(): void {
    this.phaseTenCounterService.setData(this.formData);
  }
}
