export class User {
    public emailId :string;
    public password : string;
    public name : string;
    constructor (emailId :string,password : string,name : string){
        this.emailId = emailId;
        this.password = password;
        this.name = name;
    }
   }
