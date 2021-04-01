import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'cinepedia',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'welcome',
        loadChildren: () =>
          import('../welcome/welcome.module').then((m) => m.WelcomePageModule),
      },
      {
        path: '',
        redirectTo: '/cinepedia/welcome',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/cinepedia/welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
