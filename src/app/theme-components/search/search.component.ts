import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  searchItem(val){
    if(val == null || val == ''){
      alert('Please enter some value');
    }else{
    this.router.navigateByUrl(`products/allProducts/search-page/${val}`);
  }
  }

}
