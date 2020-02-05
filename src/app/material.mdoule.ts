import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatListModule, MatTableModule, MatTabsModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule, MatDialogModule,MatTableModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule

  ],
  exports: [MatButtonModule, MatIconModule, MatInputModule,MatTableModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,MatDialogModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule

  ]
})



export class MaterialModule {

}

