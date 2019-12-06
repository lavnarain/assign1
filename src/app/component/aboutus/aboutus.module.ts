import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUscontentRoutingModule} from './aboutus.routing.module';
import {AboutusComponent} from './aboutus.component';

@NgModule({
  declarations: [AboutusComponent],
  imports: [
    AboutUscontentRoutingModule,
    CommonModule
  ]
})
export class AboutUscontentModule { }
