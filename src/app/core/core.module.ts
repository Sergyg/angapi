import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterLink} from "@angular/router";
import {RouterModule} from "@angular/router";
import { TestErrorComponent } from './test-error/test-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { SertionHeaderComponent } from './section-header/sertion-header.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [NavBarComponent, TestErrorComponent, NotFoundComponent, ServerErrorComponent, SertionHeaderComponent],
    imports: [
        CommonModule,
        RouterLink,
        BreadcrumbModule,
        SharedModule,
        RouterModule
    ],
  exports: [
    NavBarComponent,
    SertionHeaderComponent
  ]
})
export class CoreModule { }
