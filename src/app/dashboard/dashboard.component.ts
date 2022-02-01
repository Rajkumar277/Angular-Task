import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CommonApiService } from '../service/common-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  result: any;
  searchTerm: any;
  book_details: any;

  constructor(public commonService: CommonApiService) { }

  ngOnInit(): void {
  }
  onSearchCustomer() {
    console.log(this.searchTerm);
    this.onSearch(this.searchTerm);
  }

  onSearch(search_value: any) {
    this.commonService.commonApiService('get', 'search.json?q=' + search_value).then((result: any) => {
      this.result = result;
      this.book_details = this.result.docs;
      console.log('--', this.result);
    });
  }

}
