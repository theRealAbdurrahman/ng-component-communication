import { FilterComponent } from './../shared/filter/filter.component';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
    showImage: boolean;
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    listFilter: any;
    displayDetails: boolean;
    @ViewChild('filterCriteria') filterComponent: FilterComponent;
    parentListFilter: string;
    // @ViewChild(FilterComponent) filterComponent: FilterComponent; //you can also do this


    filteredProducts: IProduct[];
    products: IProduct[];



    


    constructor(private productService: ProductService) { }




    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                this.performFilter(this.listFilter);
            },
            (error: any) => this.errorMessage = <any>error
        );
        this.performFilter(this.parentListFilter);
    }

    ngAfterViewInit(): void {
        this.parentListFilter = this.filterComponent.listFilter;
        console.log(this.filterComponent.listFilter);


    }
    toggleImage(): void {
        this.showImage = !this.showImage;
        this.displayDetails = !this.displayDetails;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
        } else {
            this.filteredProducts = this.products;
        }
    }
}
