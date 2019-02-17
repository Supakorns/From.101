import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //formBuild:FormBuilder; "//สร้างตัวแปรมาเก็บแบบแรก"
  formGroup: FormGroup;
  constructor(
    //fb: FormBuilder "//ใช้ได้แค่ใน constructer เท่านั้นเอาออกมาไม่ได้"
    private formBuild: FormBuilder //เป็นการ auto variable
  ) { 
  //  this.formBuild = fb;  "//นำ formBuild มาเก็บค่าของ fb ใน constructer" 
  }  //สำหรับ initial ค่าเริ่มต้น
  ngOnInit() {
    this.formGroup =  this.formBuild.group({ //formBuild สร้าง Form
      firstName: this.formBuild.control(''), //แบบเต็ม
      //firstName: [''],   //สร้าง FormControl แบบย่อ
      lastName: ['']
    })
  }

}
