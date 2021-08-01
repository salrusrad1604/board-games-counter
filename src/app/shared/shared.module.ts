import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  exports: [MatCardModule, MatButtonModule, MatDialogModule],
})
export class SharedModule {}
