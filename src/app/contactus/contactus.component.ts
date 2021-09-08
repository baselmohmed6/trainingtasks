import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name:string="";
email:string="";
phone:string="";
message:string="";

onUserSubmitForm():void{
  console.log(this.name);
  console.log(this.email);
  console.log(this.phone);
  console.log(this.message);
}

}
