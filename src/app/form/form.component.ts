import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //formBuild:FormBuilder; "//สร้างตัวแปรมาเก็บแบบแรก"
  formGroup: FormGroup;
  @Output() change = new EventEmitter();

  constructor(
    //fb: FormBuilder "//ใช้ได้แค่ใน constructer เท่านั้นเอาออกมาไม่ได้"
    private formBuild: FormBuilder //เป็นการ auto variable
  ) { 
  //  this.formBuild = fb;  "//นำ formBuild มาเก็บค่าของ fb ใน constructer" 
  }  //สำหรับ initial ค่าเริ่มต้น
  ngOnInit() {
    this.formGroup =  this.formBuild.group({ //formBuild สร้าง Form
      firstName: this.formBuild.control('',[Validators.required, Validators.minLength(3)]), //แบบเต็ม
      //firstName: [''],   //สร้าง FormControl แบบย่อ
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.email]],
      age: [,[Validators.min(0),Validators.max(99)]]
      //lastName: ['sdadsadasd'] การ set ค่า sdadsadasd เข้าไป
    })
  }
  // EmilValidator(control: AbstractControl){
  //   const value = control.value;
  //   if (value && value.includes('@')){
  //     return null;
  //   }
  //   return {
  //     email: {
  //       acturl: value,
  //       expect: 'email@example'
  //     }
  //   }
  // }

  // onSubmit(form: FormGroup) {
   
  //   if (form.valid) {
  //     const {firstName,lastName,age,email} = form.value;
  //     const user = new User(firstName,lastName,age,email);
  //     this.change.emit(user);
  //     console.log(user);
  //   } else {
  //     ['firstName','lastName','age','email'].forEach((key: string) => {
  //       console.log(form.get(key).errors);
  //       form.get(key).markAsTouched();
  //     })
  //   }

  onSubmit(form: FormGroup){
  //   console.log(form.valid, form.invalid);
  //   console.log(<FormControl>form.get('firstName').errors);
    if (form.valid) {
      const {firstName, lastName, email, age} = form.value;
      const user = new User(firstName, lastName, email , age);
      this.change.emit(user);
      console.log(user);
    } else {
      ['firstName', 'lastName', 'age', 'email' ].forEach((key: string) => 
      {console.log(form.get(key).errors);
      form.get(key).markAsTouched();  //กด submit แล้วให้โชว์ required ถ้ายังไม่ได้กรอก
      }) 
    }



    //const {firstName, lastName, email, age} = form.value;
    // if (!(firstName && firstName.length >= 3)){   "//การ validationแบบทั่วๆไป"
    //   alert('hello')
    // }
    //const user = new User(firstName, lastName, email , age);
    //console.log(user);
    //console.log(firstName, lastName);
  }
}
