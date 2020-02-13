import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app2';
constructor( private Httpclient:HttpClient){


}
ngOnInit(){
  this.onaffiche()

}
public a : any ;
public name =""
  public onaffiche(){
this.Httpclient.get("api/job/build-app//execution/node/3/ws/fichier1.json").subscribe(data=>{this.name=data['name'] }
  ,error=>{console.error();
})

  }
}