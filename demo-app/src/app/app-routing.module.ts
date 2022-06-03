import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppHomeComponent } from './components/app-home/app-home.component';
import { AppAboutComponent } from './components/app-about/app-about.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AppHomeComponent },
  { path: 'about', component: AppAboutComponent },
  { path: 'color-tool',
    loadChildren: () =>
      import('./color-tool/color-tool.module')
        .then(m => m.ColorToolModule),
  },
  { path: 'car-tool',
    loadChildren: () =>
      import('./car-tool/car-tool.module')
        .then(m => m.CarToolModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
