import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'numseries';
  nom:any;

  findNum = (value:any) =>{
    if(value%2==0)
    {
      this.nom = (value*value)-1;
    }
    else
    {
      this.nom = (value*value)+1;
    }
    
  }

}

