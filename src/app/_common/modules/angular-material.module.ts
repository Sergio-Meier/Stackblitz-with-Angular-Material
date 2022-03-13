import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input/input-module';
import { MatButtonModule } from '@angular/material/button/button-module';
import { MatToolbarModule } from '@angular/material/toolbar/toolbar-module';
import { MatCardModule } from '@angular/material/card/card-module';

// Imports of used components

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [MatInputModule, MatButtonModule, MatToolbarModule, MatCardModule],
  declarations: [],
})
export class AngularMaterialModule {}
