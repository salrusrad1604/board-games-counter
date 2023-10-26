import { Component } from '@angular/core';
import { PhaseTenMasterCounterService } from './services/phase-ten-master-counter.service';

@Component({
  selector: 'app-phase-ten-master-counter',
  templateUrl: './phase-ten-master-counter.component.html',
  styleUrls: ['./phase-ten-master-counter.component.scss'],
})
export class PhaseTenMasterCounterComponent {
  formData = this.phaseTenMasterCounterService.getData();

  constructor(private phaseTenMasterCounterService: PhaseTenMasterCounterService) {}

  changeData(): void {
    this.phaseTenMasterCounterService.setData(this.formData);
  }
}
