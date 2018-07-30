import { NgModel } from '@angular/forms';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {

  @ViewChild('filteredList') filteredElementRef: ElementRef;
  @ViewChildren(NgModel) ngmodelref: QueryList<NgModel>;
  @Input() listFilter: string;
  @Input() hitCount: number;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.filteredElementRef) {
      this.filteredElementRef.nativeElement.focus();
    }

  }
  // communicating the value of the filter using getters and seters
  // private _listFilter; // first we declare a private var

  // get listFilter(): string { // getters return the value of the variable and we sholud name the method as the var name
  //   return this._listFilter;
  // }
  // set listFilter(val: string) {  // setters are called everytime a new value is set to the private var.
  //   this._listFilter = val;
  // }


}
