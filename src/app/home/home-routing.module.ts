import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomescreenComponent} from './components/homescreen/homescreen.component';

const routes: Routes = [{path: 'homescreen', component: HomescreenComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
