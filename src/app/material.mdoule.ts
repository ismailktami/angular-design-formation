import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatListModule, MatTabsModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule

  ],
  exports: [MatButtonModule, MatIconModule, MatInputModule,
    MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
    MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule

  ]
})



export class MaterialModule {

}

