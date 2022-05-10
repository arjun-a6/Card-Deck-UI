import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: string[]=[];
  inputCardString = "";
  unsortedCardList = "";
  imageSourceString = "";

  constructor(private dataService: DataService) { }

  ngOnInit(){

    
  } 
  
  getSortedCards(inputCardString: string){
//    alert(inputCardString);
      if(this.ValidateInput(inputCardString)){
      this.dataService.sendPostRequest(inputCardString).subscribe((data:any)=>{
        console.log(data);
        this.products = data.id;
      })  
    }    
  }

  ValidateInput(validateInput:string)
  {
    if(validateInput == "")
    {
      alert("Please select atlease 1 card!");
      return false;
    }
    else
      return true;
  }

  ResetProducts()
  {
    this.products=[];
  }

}
