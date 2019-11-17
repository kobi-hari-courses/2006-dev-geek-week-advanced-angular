import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ColorModel } from './../../models/color.model';
import { ColorsService } from './../../services/colors.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-colors',
  templateUrl: './search-colors.component.html',
  styleUrls: ['./search-colors.component.css']
})
export class SearchColorsComponent implements OnInit {
  keyword$ = new BehaviorSubject<string>('');
  searches$ = this.keyword$.pipe(
    debounceTime(500), 
    distinctUntilChanged()
  );

  results: ColorModel[];  

  constructor(private colorsService: ColorsService) { }

  ngOnInit() {
  }

  search(keyword: string) {
    this.keyword$.next(keyword);
  }

}
