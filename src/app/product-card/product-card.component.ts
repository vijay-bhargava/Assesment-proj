import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yuj-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input() productInfo: any;
  ngOnInit(): void {
  }

}
