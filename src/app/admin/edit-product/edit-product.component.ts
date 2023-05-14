// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first } from 'rxjs/operators';
// // AlertService
// import { ProductService } from '../crud-product.service';
//
// @Component({ templateUrl: 'crud.component.html' })
// export class EditComponent implements OnInit {
//   form!: FormGroup;
//   id?: number;
//   name!: string;
//   loading = false;
//   submitting = false;
//   submitted = false;
//   title: string;
//
//   constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private productService: ProductService,
//   ) {}
//
//   ngOnInit() {
//     this.id = this.route.snapshot.params['id'];
//
//     this.form = this.formBuilder.group({
//       name: ['', Validators.required],
//       description: ['', Validators.required],
//       price: ['', Validators.required],
//       pictureUrl: ['', [Validators.required]],
//       productType: ['', Validators.required],
//       productBrand: ['', Validators.required],
//
//     }, {
//       // validators: MustMatch('password', 'confirmPassword')
//     });
//
//     this.title = 'Add Product';
//     if (this.id) {
//       // edit mode
//       this.title = 'Edit Product';
//       this.loading = true;
//       this.productService.get(this.id)
//         .pipe(first())
//         .subscribe(x => {
//           this.form.patchValue(x);
//           this.loading = false;
//         });
//     }
//   }
//
//   // convenience getter for easy access to form fields
//   get f() { return this.form.controls; }
//
//   onSubmit() {
//     this.submitted = true;
//
//     // reset alerts on submit
//     // this.alertService.clear();
//
//     // stop here if form is invalid
//     if (this.form.invalid) {
//       return;
//     }
//
//     this.submitting = true;
//     this.saveUser()
//       .pipe(first())
//       .subscribe({
//         next: () => {
//           // this.alertService.success('User saved', { keepAfterRouteChange: true });
//           this.router.navigateByUrl('/users');
//         },
//         error: error => {
//           // this.alertService.error(error);
//           this.submitting = false;
//         }
//       })
//   }
//
//   private saveUser() {
//     // create or update user based on id param
//     return this.id
//       ? this.productService.update(this.id!, this.form.value)
//       : this.productService.create(this.form.value);
//   }
// }

