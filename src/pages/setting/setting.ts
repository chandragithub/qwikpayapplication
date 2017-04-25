import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddChildWorkflowPage } from '../../pages/addChildWorkflow/addChildWorkflow';
import { SchoolListDB } from '../../services/db/schoolList';
 
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  studList: any = [];
  isSchoolAvailable: any;
  itemToDelete: any;
  constructor(public navCtrl: NavController, public schoolListDb: SchoolListDB) {
  	    console.log('setting class');
  		schoolListDb.getSchoolList();

  }
  
  onNgInit() {
    if(this.studList.length > 0 ) {
      this.isSchoolAvailable = true;
    } else {
      this.isSchoolAvailable = false;
    }
  }

  schoolSelect(inputschool) {
  	console.log(inputschool);
  }

  addSchoolList(schoolName) {
  	// this.schoolListDb.addSchoolList(schoolName);
    this.studList.push(schoolName);
    console.log('school name', this.studList.indexOf('schoolName') );
    if(this.studList.length > 0 ) {
      this.isSchoolAvailable = true;
    } else {
      this.isSchoolAvailable = false;
    }
  }

  deleteChild(deleteItem) {
    console.log('delete item is : ', deleteItem);
    this.itemToDelete = this.studList.indexOf(deleteItem);
    this.studList.splice(this.itemToDelete);
  }

  nextAddChild() {
    this.navCtrl.setRoot(AddChildWorkflowPage);
  }
}
