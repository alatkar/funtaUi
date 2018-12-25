import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from '@app/animation/sliderInOut';

@Component({
  selector: 'funta-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    SlideInOutAnimation
  ]
})
export class NotificationComponent implements OnInit {
  public ShowModal: boolean = false;
  public currentState: string = 'out';
  private stateModal: boolean = false;
  public icon: string;
  constructor() { }

  ngOnInit() {
  }
  private showLikes() {
    this.icon = 'glyphicon-heart';
    this.ShowAnimation();
  }

  private showFriends() {
    this.icon = 'glyphicon-user';
    this.ShowAnimation();
  }

  private showComment() {
    this.icon = 'glyphicon-comment';
    this.ShowAnimation();
  }

  toggleState(): void {
    this.currentState = this.currentState === 'in' ? 'out' : 'in';
  }

  public animationDone(e) {
    if (this.stateModal) {
      this.ShowModal = false;
      this.stateModal = false;
    }
  }
  public animationStarted(e) {

  }

  public CloseModal() {
    this.currentState = 'out';
    this.stateModal = true;
  }

  private ShowAnimation(): void {
    this.ShowModal = true;
    window.setTimeout(() => this.currentState = 'in', 1);
  }

}
