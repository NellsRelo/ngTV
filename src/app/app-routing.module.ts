import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/channels', pathMatch: 'full' },
  {
    path: 'channels',

    loadChildren: async () => (
      await import('src/app/module-channels/module-channels')
    ).ModuleChannel,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
