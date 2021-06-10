export interface User {
    userId:number;
	firstName:string;
	lastName:string;
	userName:string;
	email:string;
	userType:string;
	isAuthenticated:boolean;
	password:string;
	dob:Date;
	address:string;
  }

export interface userType {
	viewValue: string;
	value: string;
  }