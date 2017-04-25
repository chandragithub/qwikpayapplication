import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
 
@Injectable()
export class SchoolListDB {
 
  data: any;
  db: any;
  remote: any;
  studList: any = [];
 
  constructor() {
 
    this.db = new PouchDB('qwikfee');
 
    this.remote = 'http://localhost:5984/cloudo';
 
    /* let options = {
      live: true,
      retry: true,
      continuous: true
    }; */
 
    // this.db.sync(this.remote, options);
 
  }
 
  getSchoolList() {
 	 console.log('Hello ');
  }
 
  addSchoolList(data){
  	 console.log('data is ', this.db);
 	   // this.db.post(data);
      this.studList.push(data);
      console.log(this.studList);

  }
 
  updateSchoolList(todo){
 
  }
 
  deleteSchoolList(todo){
 
  }
 
  handleChange(change){
 
  }
 
}