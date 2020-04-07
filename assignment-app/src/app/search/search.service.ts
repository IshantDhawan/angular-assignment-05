import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    showSearchResults(todoList,item){
        return todoList.filter(function(todoItem) {
            return todoItem.name.toLowerCase().includes(item);
        });    
    }
}