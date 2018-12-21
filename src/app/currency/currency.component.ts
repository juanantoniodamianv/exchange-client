import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCurrencies();
  }

  getCurrencies() {
    this.currencies = [];
    this.rest.getCurrencies('dolar').subscribe((data: {}) => {
      console.log(data);
      this.currencies = data;
    });
  }

}
