import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { CommonApiService } from '../service/common-api.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  result: any;
  data: any = [];

  isAlive = true;
  book_details: any = [];
  // book_details: any = [{
  //   "subtitle": "the expansion of South African media and ICT companies into the SADC region",
  //   "lc_classifications": [
  //     "P92 .S6 T54 2006"
  //   ],
  //   "source_records": [
  //     "marc:marc_loc_updates/v37.i22.records.utf8:22477682:923",
  //     "marc:marc_loc_2016/BooksAll.2016.part36.utf8:257814850:1016"
  //   ],
  //   "title": "The great trek north",
  //   "languages": [
  //     {
  //       "key": "/languages/eng"
  //     }
  //   ],
  //   "subjects": [
  //     "Mass media -- South Africa",
  //     "Mass media -- Africa, Southern",
  //     "Information technology -- South Africa",
  //     "Information technology -- Africa, Southern"
  //   ],
  //   "publish_country": "sa ",
  //   "by_statement": "Console Tleane.",
  //   "type": {
  //     "key": "/type/edition"
  //   },
  //   "publishers": [
  //     "Freedom of Expression Institute"
  //   ],
  //   "key": "/books/OL23394115M",
  //   "authors": [
  //     {
  //       "key": "/authors/OL3092802A"
  //     }
  //   ],
  //   "publish_places": [
  //     "Braamfontein, South Africa"
  //   ],
  //   "pagination": "xii, 200 p. ;",
  //   "lccn": [
  //     "2009403033"
  //   ],
  //   "notes": {
  //     "type": "/type/text",
  //     "value": "Cover title.\n\nIncludes bibliographical references (p. 181-187) and index."
  //   },
  //   "number_of_pages": 200,
  //   "isbn_13": [
  //     "9780620349055"
  //   ],
  //   "isbn_10": [
  //     "0620349050"
  //   ],
  //   "publish_date": "2006",
  //   "works": [
  //     {
  //       "key": "/works/OL8940286W"
  //     }
  //   ],
  //   "latest_revision": 3,
  //   "revision": 3,
  //   "created": {
  //     "type": "/type/datetime",
  //     "value": "2009-06-11T17:47:13.201493"
  //   },
  //   "last_modified": {
  //     "type": "/type/datetime",
  //     "value": "2020-12-23T18:56:42.429837"
  //   }
  // }];

  constructor(public commonService: CommonApiService) { }

  ngOnInit(): void {
    // console.log('---', this.commonService.data.source.value);
    this.commonService.data.pipe(takeWhile(() => this.isAlive))
      .subscribe(res => {
        this.result = res;
        if (!!res) {
          this.data = this.result;
          console.log('---', this.data);
          this.getBookDetails();
        }
      });
  }

  getBookDetails() {
    this.commonService.commonApiService('get', 'books/' + this.data + '.json').then((result: any) => {
      this.result = result;
      this.book_details.push(this.result);
      console.log('--', this.result);
    });
  }

}
