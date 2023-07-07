import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class SharedModule {}
