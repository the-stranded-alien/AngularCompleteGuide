import {Component, computed, signal, Input, input, Output, output, EventEmitter } from '@angular/core';
import { type User } from "./user.model";
import { DUMMY_USERS } from "../dummy-users";

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// TS: Type vs Interface
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  // @Input({ required: true }) user!: {
  //   id: string;
  //   name: string;
  //   avatar: string;
  // };

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // @Output() select = new EventEmitter();
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // Input using Signals
  // avatar = input<string>()
  // name = input<string>()
  // avatar = input.required();
  // name = input.required();
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }
}
