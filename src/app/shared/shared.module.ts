import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule, MatTableModule, MatSelectModule],
  exports: [MatCardModule, MatButtonModule, MatDialogModule, MatTableModule, MatSelectModule],
})
export class SharedModule {}
