import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headerName="Angular tutorial";
  salary="100";
  isDisabled=false;
  colorName="green";
  fontSize="50px";
  className="headerClass";
  styleValue={"color":"red", "font-size":"40px"};
  show=false;
  colors=['red','yellow','green','blue'];
  functionClick(): void {
    alert('hello gimmes')
  }


  ngOnInit(): void {
    
  }
 
}
