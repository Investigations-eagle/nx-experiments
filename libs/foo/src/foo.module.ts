import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooComponent } from "@nx-experiments/foo/src/foo.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: FooComponent}
    ])
  ],
  declarations: [FooComponent],
})
export class FooModule {}
