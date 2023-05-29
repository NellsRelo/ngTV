import { NgModule } from '@angular/core';
import { ChannelListComponent } from './components/channel-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Module Router
const routes: Routes = [
    {
        path: 'list',
        component: ChannelListComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ChannelListComponent
    ]
})
export class ModuleChannel { }