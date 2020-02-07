import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NzButtonModule, NzDatePickerModule, NzInputModule} from 'ng-zorro-antd';
import { NzCardModule } from 'ng-zorro-antd/card';
import {HttpClientModule} from '@angular/common/http';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzTableModule } from 'ng-zorro-antd/table';

import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});

@NgModule({
  imports:[NzButtonModule,NgZorroAntdModule,NzInputModule,NzDatePickerModule ,NzCardModule,HttpClientModule,NzIconModule,NzTableModule],
  exports:[NzButtonModule,NgZorroAntdModule,NzInputModule,NzDatePickerModule, NzCardModule,HttpClientModule,NzIconModule,NzTableModule]
,  providers: [
    {
      provide: NZ_ICONS,
      useValue: icons
    }
  ]

})
export class AntngModule {

}
