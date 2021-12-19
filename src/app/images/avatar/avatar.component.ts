import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: '<img class="avatar" [src]="img" alt="">',
  styleUrls: ['./avatar.component.sass']
})
export class AvatarComponent {
  @Input() img: string | undefined;
  constructor() {
    // not todo
  }
}
