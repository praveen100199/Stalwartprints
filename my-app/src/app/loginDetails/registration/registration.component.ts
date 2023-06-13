import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './registration.service';
// import { CoreConstant } from 'src/app/@core';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  Submited = false;
  registrationForm: FormGroup; 
  registerData:any=[];


  formData = {
    name: '',
    email: '',
    countrycode: '',
    phone: '',
    password: ''
  };

  countries = [
    { name: 'United States', code: '+1' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'India', code: '+91' },
    // Add more countries as needed
  ];

  constructor(private _RegisterService: RegisterService, private ToastrService:ToastrService) {
    this.registrationForm = new FormGroup({
      username: new FormControl('',  [Validators.required,  Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      countrycode: new FormControl('', Validators.required),
      phonenumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl( '',[Validators.required,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z/d$@$!%*?&].{8,}'), Validators.minLength(8)]),
      // At least 8 characters in length, Lowercase letters, Uppercase letters, Numbers, Special characters 
    });
  }

  ngOnInit():void {
    
  }


  
  submitForm() {
    if (this.registrationForm.valid) {
      const formValues = {...this.registrationForm.value }

      const formData = new FormData();
      formData.append('email',formValues.email)
      formData.append('password',formValues.password)
      formData.append('countrycode',formValues.countrycode)
      formData.append('username',formValues.username)
      formData.append('phonenumber',formValues.phone)

      this._RegisterService.doRegister(formValues.username,formValues.email,formValues.countrycode,formValues.password,formValues.phonenumber).subscribe({
        next: (response: any) => {
          console.log("posted data", response);
          // this.Submited = true;
          this.ToastrService.success("Successfully Registered")
        },
        error: ()=>{
          console.log("Getting 500 internal server Error")
          this.ToastrService.error("User with email already exists")
        }
        
      });
      // Reset form after submission
    this.registrationForm.reset();
    setTimeout(()=>{
      this.closeModal.emit();
    }, 500);
    };
  };

  @Output() closeModal = new EventEmitter<void>();
  // ...
  
  closeModalClicked() {
    this.closeModal.emit();
  }
  
}
