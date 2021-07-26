import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output() isChanged=new EventEmitter<string>()
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  @ViewChild('myForm', {static: false}) myForm: any ='';
search(val:any){
  this.isChanged.emit(val);
  this.myForm.resetForm();
  // alert(val);
  // this.dataService.repoRequest(val);
  // this.dataService.quoteRequest(val);
  
}

}
