import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitClone';
  users:any;
constructor(private dataService:DataService){

}
ngOnInit(){
//this.users=this.dataService.quoteRequest();
console.log(this.users);
}
  }

