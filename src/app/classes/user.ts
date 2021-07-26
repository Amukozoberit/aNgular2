export class User {
    url: string | undefined ;
    username: string | undefined;
    created_at: Date=new Date();
    repo:string|undefined;
    user_repo:string|undefined;
  followers: number | undefined;
  following: number | undefined;
    constructor(url?:string,username?:string,created_at?:Date,repo?:string,followers?:number,following?:number){
   
      
    }
}
