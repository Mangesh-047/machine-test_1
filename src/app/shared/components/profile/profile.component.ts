import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId !: any
  userObj!: any
  constructor(
    private _userService: UserService,
    private _fireStore: AngularFirestore

  ) { }

  ngOnInit(): void {
    // this._userService.userID
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       const uid = res
    //       this._fireStore.collection('user').doc(uid.toString()).get()
    //         .subscribe(
    //           res => {
    //             console.log('data get from firebase', res.data());
    //             this.userName = res.data()
    //             console.log(this.userName);

    //           }
    //         )

    //     },
    //     err => {
    //       console.log(err);

    //     }
    //   )

    this.userId = localStorage.getItem('userId')

    console.log(this.userId);

    this._fireStore.collection('user').doc(this.userId).get()
      .subscribe(
        res => {
          console.log(res.data(), 'data get');
          this.userObj = res.data()
        }
      )

  }

}
