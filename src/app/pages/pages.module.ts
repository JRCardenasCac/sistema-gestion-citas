import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { DoctorComponent } from './doctor/doctor.component';
import { PattientComponent } from './pattient/pattient.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    PagesComponent,
    DoctorComponent,
    PattientComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, DataTablesModule],
  exports: [DashboardComponent, UsuariosComponent],
})
export class PagesModule {}
