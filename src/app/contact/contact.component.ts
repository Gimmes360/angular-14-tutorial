import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `

  
    <h2>
      contact works!
    </h2>
    <a routerLink="add">Add contact</a>
    <br>
    <br>
    <a routerLink="edit/201">Edit contact</a>
    <div>
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
