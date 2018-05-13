import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title){


    const url = "https://services.omegafi.com/omegafi_connect/api/v2/chapters";
    const userName = "DXConnect";
    const passWord = "SXJnHm_0";
    
    let headers = new Headers();
    
    headers.append('Authorization', 'Basic' + btoa(userName + ":" + passWord));
    headers.append('credentials','include');
    headers.append('content-type','application/json');
    
    console.log(headers.get('credentials'));
    
    function GetChapters(){
        
        var chapterRequest = new Request(url);
    
        fetch(chapterRequest,headers)
            .then( res => console.log(res))
            .catch( error => console.log(error))
    
        
    
        
        
        
    
    };
    
    GetChapters();
        


    
  }

  public setTitle( newTitle: string){
    this.titleService.setTitle(newTitle);
  }
}
