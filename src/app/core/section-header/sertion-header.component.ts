import {Component, OnInit} from '@angular/core';
import {BreadcrumbModule, BreadcrumbService} from "xng-breadcrumb";
import {Observable} from "rxjs";

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./sertion-header.component.scss']
})
export class SertionHeaderComponent implements OnInit{
  breadcrumb$: Observable<any[]>;

  constructor(private bcService: BreadcrumbService ) {
 }
 ngOnInit(){
   this.breadcrumb$ = this.bcService.breadcrumbs$;

 }
 }
