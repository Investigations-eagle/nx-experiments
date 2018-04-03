import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AppsListComponent } from './apps-list/apps-list.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'login'
        },
        {
          path: 'login',
          loadChildren: '@nx-experiments/login#LoginModule'
        },
        {
          path: 'apps-list',
          component: AppsListComponent
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  declarations: [AppComponent, AppsListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
