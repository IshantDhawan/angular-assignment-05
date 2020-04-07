import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { Todo } from '../Todo/todo';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit{

@Input() todos: Todo[];
  //Data 
  searchField: FormControl;
  searches: Todo[];

  constructor(private searchService : SearchService){}
  searchform: FormGroup;

  ngOnInit() {
    this.searches = this.todos;
    this.searchform = new FormGroup({})
    this.searchField = new FormControl('');

    //Search Logic : get search items and add into an array
    this.searchField.valueChanges
      .pipe(
        debounceTime(1000)  
      ).subscribe(item => {
        this.searches = this.searchService.showSearchResults(this.todos,item);
      })
  }
}