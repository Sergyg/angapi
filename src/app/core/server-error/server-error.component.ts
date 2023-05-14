import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit{
  error: {
    message: string;
    details: string
  }

  constructor(private router: Router) {
     if (this.router.getCurrentNavigation().extras.state?.error !== null) {
       const navigation = this.router.getCurrentNavigation();
       this.error = navigation?.extras?.state?.error;
     }
  }
ngOnInit() {

    // this.error = history.state.error;
  }
}
