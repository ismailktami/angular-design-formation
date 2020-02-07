import {NgModule} from '@angular/core';
import {AccordionModule, ButtonModule, CalendarModule, CheckboxModule, InputMaskModule, InputTextModule, RadioButtonModule} from 'primeng';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';


@NgModule({
  imports:[AccordionModule,ButtonModule,InputMaskModule,CheckboxModule,InputTextModule ,RadioButtonModule, CalendarModule,CardModule ,TableModule ],
  exports:[AccordionModule,ButtonModule,InputMaskModule,CheckboxModule,InputTextModule,RadioButtonModule,CalendarModule,CardModule,TableModule]
})
export class PrimengModule {

}
