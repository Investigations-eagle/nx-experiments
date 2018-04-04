import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AppsListComponent } from './apps-list/apps-list.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          component: SplashScreenComponent,
          pathMatch: 'full'
        },
        {
          path: 'login',
          loadChildren: '@nx-experiments/login#LoginModule',
        },
        {
          path: 'apps-list',
          component: AppsListComponent,
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  declarations: [AppComponent, AppsListComponent, SplashScreenComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
