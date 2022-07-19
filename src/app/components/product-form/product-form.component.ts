import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup
  submitted: boolean = false
  
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', [Validators.required]],
      color: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      isHighlight: [''],
    })
  }

  get f() { return this.productForm.controls; }

  onSubmit(){
    this.submitted = true

    if (this.productForm.invalid) return
    this.productsService.createProduct(this.productForm.value).subscribe()
    this.submitted = false
    this.productForm.reset()
  }

}
