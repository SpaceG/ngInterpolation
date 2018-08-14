import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {


// (1). set here our Variable 

myVariable = "MyFire"

// (2). set here our bitwiseOR  

bitwiseOR = 2 | 5 // 010 101 => 0 | 1 = 1 then 1 | 0 is 1 | then 0 | 1 = 1; 111

// (3). ${this.i++} from the ConsoleLOG 
i = 0 

// (4). setInterval 
someVar = Math.random()


// The Constructor 

  constructor() { 

  }


// (3). someTask | 
    // here we start the console.log 

doSomeHeavyTask() {
  console.log(`Called Browser Hack in Angular  ${this.i++} times`) 
}


  ngOnInit() {

    // (4). setInterval 

    setInterval(()=> {

      this.someVar = Math.random()

    }, 50)
  }

}
