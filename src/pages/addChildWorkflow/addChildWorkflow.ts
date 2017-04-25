import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeeInfoPage } from '../../pages/feeInfo/feeInfo';
 
@Component({
  selector: 'page-addChildWorkflow',
  templateUrl: 'addChildWorkflow.html'
})
export class AddChildWorkflowPage {

  childList: any = [];
  childListAvailable: any = [];
  constructor(public navCtrl: NavController) {
  	    console.log('setting class');
        
  }

  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges() 
     if(this.childList.length > 0 ) {
            this.childListAvailable = true;
     } else {
            this.childListAvailable = false;
            console.log('child list avai false');
       }
  }

  FeeInfoPage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.setRoot(FeeInfoPage);
  }

  schoolSelect(inputschool) {
  	console.log(inputschool);
  }

  addChildList(childName) {
  	// this.schoolListDb.addSchoolList(schoolName);
    this.childList.push(childName);
    if(this.childList.length > 0 ) {
            this.childListAvailable = true;
     } else {
            this.childListAvailable = false;
            console.log('child list avai false');
     }
  }
}
