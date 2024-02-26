import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutes } from './Admin.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { MyContainComponent } from './Components/MyContain/MyContain.component';
import { MaterialModule } from '../UIGLOBAL/material.module';



@NgModule({
  declarations: [
    NavigationComponent,
    MyContainComponent
  ],
 
  imports: [
    CommonModule,
MaterialModule,
    AdminRoutes,

  ]
})
export class AdminModule { }
