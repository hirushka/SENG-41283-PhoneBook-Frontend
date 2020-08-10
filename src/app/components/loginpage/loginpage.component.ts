import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';  
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private adalService: MsAdalAngular6Service) { }

  ngOnInit(): void {
  }

  login(): void {  
    this.adalService.login();  
  }  

}