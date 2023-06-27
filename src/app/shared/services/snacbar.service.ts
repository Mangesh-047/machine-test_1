import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class SnacbarService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  snacbarOpen(msg: string) {
    this._snackBar.open(msg, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000

    })
  }
}
