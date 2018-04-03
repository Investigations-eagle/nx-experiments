import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "@nx-experiments/login/src/login.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LoginComponent}
    ])
  ],
  declarations: [LoginComponent],
})
export class LoginModule {}