import { Component, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'machine-test_1';

  isLoading: boolean = false



  constructor(
    private _lodaerService: LoaderService
  ) { }

  ngOnInit(): void {
    this._lodaerService.loaderStatus
      .subscribe(res => this.isLoading = res)
  }


}
