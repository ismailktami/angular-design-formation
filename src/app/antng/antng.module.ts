import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NzButtonModule, NzDatePickerModule, NzInputModule} from 'ng-zorro-antd';
import { NzCardModule } from 'ng-zorro-antd/card';
import {HttpClientModule} from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import {CurrentTrainingAngComponent} from './current-training/current-trainingAng.component';
import {EditTrainingAngComponent} from './edit-training/edit-training.ang.component';
import {NewTrainingAngComponent} from './new-training/new-training.ang.component';
import {TrainingTableAngComponent} from './training-table/training-table.component';
import {TrainingAngComponent} from './training/training.component';
import { LoginAngComponent } from './login-ang/login-ang.component';
import { SignupAngComponent } from './signup-ang/signup-ang.component';
import {MaterialModule} from '../material.mdoule';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CommonModule } from '@angular/common';
import {TestComponent} from './test/test.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});

@NgModule({
  imports:[NzButtonModule,NgZorroAntdModule,NzInputModule,NzDatePickerModule ,NzCardModule,HttpClientModule,NzIconModule,NzTableModule,CommonModule,NzTabsModule ,MaterialModule],
  exports:[NzButtonModule,NgZorroAntdModule,NzInputModule,NzDatePickerModule, NzCardModule,HttpClientModule,NzIconModule,NzTableModule,NzTabsModule,CommonModule]
,  providers: [
    {
      provide: NZ_ICONS,
      useValue: icons
    }
  ], declarations: [CurrentTrainingAngComponent, EditTrainingAngComponent, NewTrainingAngComponent, TrainingTableAngComponent,TrainingAngComponent, LoginAngComponent, SignupAngComponent]

})
export class AntngModule {

}
