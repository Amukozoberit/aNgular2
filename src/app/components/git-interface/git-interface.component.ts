import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

import { User } from 'src/app/classes/user';
import { Repo } from 'src/app/classes/repo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-interface',
  templateUrl: './git-interface.component.html',
  styleUrls: ['./git-interface.component.css']
})
export class GitInterfaceComponent implements OnInit {
  goTourl(){
    const value=document.getElementById("btn");
  // alert(value?.innerHTML);
this.router.navigate(['/repo','value']);
  }
  gitUser:User=new User("","",new Date());
  repository:any=[];
  repo:any;
  
  constructor(private dataSercise:DataService,private router:Router) { 
   
  }

  ngOnInit(): void {
    this.dataSercise.gitUserRequest("Amukozoberit");
    this.gitUser=this.dataSercise.gitUser;
    console.log(this.gitUser);



   this.dataSercise.repoRequest("Amukozoberit");
    this.repository=this.dataSercise.repo;
    console.log(this.repository);

  }

  displ(val:string){
    
    this.dataSercise.gitUserRequest(val);
       this.gitUser=this.dataSercise.gitUser;
      console.log(this.gitUser);
  
  
  
     this.dataSercise.repoRequest(val);
      this.repository=this.dataSercise.repo;
       console.log(this.repository);
  }

}
