import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-about-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('modal', { static: false })
  modal!: ModalComponent;

  openModal() {
    this.modal.open();
  }

}
