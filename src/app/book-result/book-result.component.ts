import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from '../service/common-api.service';

@Component({
  selector: 'app-book-result',
  templateUrl: './book-result.component.html',
  styleUrls: ['./book-result.component.scss']
})
export class BookResultComponent implements OnInit, OnChanges {

  @Input() book_result: any;
  final_result: any = [];

  constructor(public commonService: CommonApiService, private _router: Router) { }

  ngOnInit(): void {
    this.final_result = this.book_result;
  }
  

  ngOnChanges() {
this.final_result = this.book_result;
  }

  _viewBook(data: any) {
    this.commonService.setData(data.edition_key[0]);
    this._router.navigate(['/book-details']);
  }
}
