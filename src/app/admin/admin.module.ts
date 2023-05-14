import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
// import { AddPageComponent } from './add-page/add-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { QuillModule } from 'ngx-quill'
import {AddProductComponent} from "./add-product/add-product.component";
import {IndexProductComponent} from "./index-product/index-product.component";

@NgModule({
    declarations: [
        AddProductComponent,
      IndexProductComponent,
        // EditProductComponet,
        DashboardPageComponent,
        // AddPageComponent,
        EditPageComponent,
        OrdersPageComponent,

    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        QuillModule.forRoot(),
        RouterModule.forChild([
            {
                path: '',  children: [
                    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
                    {path: 'list', component: IndexProductComponent},
                    ]
            }
        ]),
    ],

    exports: [RouterModule]
})

export class AdminModule{

}
