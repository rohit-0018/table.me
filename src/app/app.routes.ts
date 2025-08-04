import { Routes } from '@angular/router';
import { Table } from './table/table';
import { DetailsComponent } from './details-component/details-component';

export const routes: Routes = [
    {path: "", component: Table},
    {path: "details/:id", component: DetailsComponent}
];
