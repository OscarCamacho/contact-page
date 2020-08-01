import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home/home-routing.module';
import {HomeModule} from './home/home.module';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/homescreen'},
    {path: 'homescreen', redirectTo: '/homescreen', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
