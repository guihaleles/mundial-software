import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { delay, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mundial-client';
  isloading:boolean = false;

  constructor(private global:GlobalService){ }

  ngOnInit(){
    this.subscribe();
  }


  subscribe(){
    GlobalService.sharedIsloading
                  .pipe(
                    // To avoid an error
                    delay(0),
                  )
                  .subscribe(
                    (data:boolean) => {
                      this.isloading = data;
                      console.log("app componente change") 
                      console.log(data)
                    }
    )
  }

}
