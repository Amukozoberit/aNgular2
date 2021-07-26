import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { User } from '../classes/user';
import { Repo } from '../classes/repo';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  gitUser: User;
  public repo:any=[];
  results:Object[] =[];


  constructor(private http:HttpClient) {
    this.gitUser = new User("","",new Date(),"");
  // this.repo=new Repo('','',false,'');
   }

   gitUserRequest(user:string){
     let url=environment.url+user+'?client_id='+environment.client_id+'client_secret='+environment.client_secret;
    //  let url=''client_id='environment.client_id+'client_secret='+environment.client_secret';
    //  let url='https://api.github.com/users/${user}?access_token='+ `${environment.acces_token}`;
     interface ApiResponse{
       avatar_url:string;
       login:string;
       repos_url:string;
       html_url:string;
       followers:number;
       following:number;
       created_at:Date;
       
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<ApiResponse>(url).toPromise().then(response=>{
         this.gitUser.url = response.avatar_url;
         this.gitUser.username = response.login;
         this.gitUser.repo=response.repos_url;
         this.gitUser.user_repo=response.html_url;
         this.gitUser.followers=response.followers;
         this.gitUser.following=response.following;
         this.gitUser.created_at=response.created_at;
         console.log(response);
         resolve("")
        
       },
      
       error=>{
         console.log(error);
        confirm(`Sorry cant find ${user}`);
                // window.location.reload();
               reject(error);
       })
     })
    
     return promise
   };
   repoRequest(user:string){
    let url=environment.repoU+user+'/repos'+'?client_id='+environment.client_id+'client_secret='+environment.client_secret;
    // let url=`https://api.github.com/users/${user}/repos?client_id=${environment.client_id}$client_secret=${environment.client_secret}`
  let urll="https://api.github.com/users/Amukozoberit/repos?"
    this.repo=[];
    interface ApiResponse{
      name:string;
      html_url:string;
      fork:boolean;
      repo_url:string;
      language:string;
         }
         let promise = new Promise((resolve,reject)=>{
          return this.http.get<ApiResponse[]>(url)
          .toPromise()
          .then(response=>{
            console.log(response);
          if (response!=null){
          response.forEach((resp) =>{
            this.repo.push(resp);
                  
              })}else{
      
    }
    return  response;
        },
      error=>{
       // confirm(`not found ${user}`);
                 window.location.reload();
               reject(error);

       
      })
    })
    //console.log(promise);
    return promise;
  } 
 

}

