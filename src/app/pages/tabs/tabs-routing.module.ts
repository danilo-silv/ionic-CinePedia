import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'genre',
        children: [
          {
            path: 'home',
            data: { type: 0 },
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'movie',
            data: { type: 1 },
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'serie',
            data: { type: 2 },
            loadChildren: () =>
              import('../home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
        ],
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
        path: 'details',
        children: [
          {
            path: 'genre/:id',
            loadChildren: () =>
              import('../details/details.module').then(
                (m) => m.DetailsPageModule
              ),
          },
          {
            path: '**',
            redirectTo: 'welcome',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/cinepedia/genre',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'cinepedia/genre',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
