import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
})
export class SharedModule {}
