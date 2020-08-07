import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactscreenComponent} from './components/contactscreen/contactscreen.component';

const routes: Routes = [{path: 'contact', component: ContactscreenComponent}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}
