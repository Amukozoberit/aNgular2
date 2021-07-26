import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repo } from 'src/app/classes/repo';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-repo-design',
  templateUrl: './repo-design.component.html',
  styleUrls: ['./repo-design.component.css']
})
export class RepoDesignComponent implements OnInit {
  repos:Repo[]=[];
//@Input () repo:Repo=new Repo();
  constructor(private route:ActivatedRoute,private dataService:DataService) {

   }

  ngOnInit(): void {
    let val:any=this.route.snapshot.paramMap.get('value');
    console.log(val);
  
    this.repos=this.dataService.repo;
    console.log(this.repos);
  }

}
