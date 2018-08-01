import { NgModel } from '@angular/forms';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit, OnChanges {

  // listFilter: string;
  @ViewChild('filteredList') filteredElementRef: ElementRef;
  @ViewChild('div') div: ElementRef;
  @ViewChildren(NgModel) ngmodelref: QueryList<NgModel>;
  @Input() hitCount: number;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() displayDetail: boolean
  constructor() { }

  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChanged.emit(value)

  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    if (this.filteredElementRef) {
      this.filteredElementRef.nativeElement.focus();
      console.log(this.div.nativeElement.classList.value);


    }

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);


  }
  filterHandler($event) {
    console.log(this.ngmodelref.first.dirty);
    console.log(this.ngmodelref.first.pristine);

    // this.listFilter = $event;
    console.log(this.listFilter);
  }
  // communicating the value of the filter using getters and setters
  // private _listFilter; // first we declare a private var

  // get listFilter(): string { // getters return the value of the variable and we should name the method as the var name
  //   return this._listFilter;
  // }
  // set listFilter(val: string) {  // setters are called every time a new value is set to the private var.
  //   this._listFilter = val;
  // }


}
