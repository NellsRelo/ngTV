import { NgModule } from '@angular/core';
import { ChannelListComponent } from './components/channel-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
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
        MatTableModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ChannelListComponent
    ]
})
export class ModuleChannel { }