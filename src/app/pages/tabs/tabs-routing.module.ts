import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('../favorites/favorites.module').then(
            (m) => m.FavoritesPageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: '',
        redirectTo: '/cinepedia/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'cinepedia/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
