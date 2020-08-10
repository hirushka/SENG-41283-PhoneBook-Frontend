import { Component, OnInit } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable } from 'rxjs';
import { infoService } from '../../service/infoService'
import { infoDetails } from '../../model/info'
import { GreetingMessage } from '../../service/azure.devicelog'
import { ResponseFormat } from '../../model/responseformat'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username: String;

  public newUser: infoDetails;

  constructor(private adalService: MsAdalAngular6Service, private inservice: infoService, private greetingMessage: GreetingMessage) { }

  ngOnInit(): void {
    var uname = JSON.stringify(this.getLoggedInUser());
    const details = JSON.parse(uname);
    this.username = "Logged As " + details["profile"]["name"];
  }

  logout(): void {
    this.adalService.logout();
  }

  getLoggedInUser(): any {
    return this.adalService.userInfo;
  }

  getuserdetails() {
    console.log('aaaaaaaaaaa');

    this.inservice.getUserDetails((document.getElementById("usernic") as HTMLInputElement).value).subscribe((data: infoDetails) => {
     alert(
      "User name : " + data.username +"\n" + "User Phone Number : " + data.userPhoneNo +"\nData retrieved from Azure web app." 
     );
      console.log(data.userPhoneNo, data.id, data.username);
    }

    )
  }


  saveuserdetails() {
    // this.newUser.userNic = "222444333v";
    // this.newUser.username = "kkk";

    this.greetingmessage();

    const rememberUser: JSON = <JSON><unknown>{
      "userPhoneNo": (document.getElementById("userid") as HTMLInputElement).value,
      "username": (document.getElementById("username") as HTMLInputElement).value
    }

    this.inservice.addUserDetails(rememberUser).subscribe(data => {
      alert(data);
      console.log('Product created!' + data);
      console.log('Product created!' + JSON.stringify(data));
      

    })
   
    console.log(rememberUser);
    console.log('Product created!' + JSON.stringify(rememberUser));

  }

  greetingmessage() {
    this.greetingMessage.getGreeting((document.getElementById("username") as HTMLInputElement).value).subscribe((data: ResponseFormat) => {
      console.log(data.status);
      alert(data.status + "\nData retrived from Azure function.");
    }

    )
  }

}