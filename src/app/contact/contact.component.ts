import { Http,Response } from '@angular/http';
import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  
  constructor(fb: FormBuilder, private http: Http){
    this.contactForm = fb.group({
        'name': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
        'email': ['',Validators.compose([Validators.required, Validators.pattern(/\w+@\w+/)])],
        'phone': ['',Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern(/[[\D]?\d[\D]?/)])],
        'message': ['',Validators.compose([Validators.required, Validators.minLength(10)])],
    });



  }

  ngOnInit() {

  }
  
  public received = false;
  public error = false; 

  
  
  onSubmit(x: FormGroup):void{
  
    this.http.post("/api/contact-form", x).subscribe(
      (res: Response) => {
        console.log("email sent successfully");
        this.received = true;
      },
      (err: any) => {
        console.log(err);
        this.error = true;
      },
      () => {
        return null;
      }
      
      /*if(res.statusText = "OK"){
        return this.received = true;
      }else{
        return this.emailError = true;
      }*/
    );
     

  }

  
  /*optional custom validator
  phoneValidator(control: AbstractControl): {[s: string]: boolean}{
    if(control.value.match(/\d?\d/)){
      
      return {invalidPhone: true};
    }
  }*/
}
