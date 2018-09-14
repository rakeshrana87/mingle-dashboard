import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  rform: FormGroup;
  username:string = '';
  password:string = '';
  //const arr: allowedLogin = ["emaisem","esmapen","ezraksi","eragyad"];

   constructor(private fb: FormBuilder, private router: Router) { 
    //console.log("first");  
    this.rform = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.compose([
                         Validators.required,  
                         Validators.minLength(3),
                         Validators.maxLength(30)
                        ])]
     });
  }

   ngOnInit() {
    // alert( sessionStorage.removeItem('loggedIn'));      
   }

   onSubmit = function(post){
   
    //this.loading=true; // This is going to be used for loading.
    this.username = post.username;


    //console.log(post);
    if(post.username === post.password){
      localStorage.setItem('loggedIn', post);
      this.router.navigate(['/home']); 
      //window.location.href="http://localhost:4200/home";      
    } else {      
      this.router.navigate(['/login']);
    
    }
  } 

}
