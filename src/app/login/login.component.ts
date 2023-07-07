import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModule } from 'src/materialModule';
import { FormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,materialModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }
respData: any;

proceedLogin(loginData:any){
  if(loginData.valid){
    this.service.proceedLogin(loginData.value).subscribe(item =>{
  this.respData=item;
if(this.respData != null){
localStorage.setItem('token', this.respData.jwtToken);
}else{
  alert("login failed" )
}


});


  }
}

}
