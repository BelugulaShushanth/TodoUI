import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  name : String = ''
  age : number = 25

  constructor(router : ActivatedRoute,private authService:AuthenticationService, private routerNav:Router){
    this.name = router.snapshot.params['name']; 
  }

 

}
