import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public heading: string = 'Pipes Program';
  public text: string = 'Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions to use in template expressions to accept an input value and return a transformed value';
  public tme: Date = new Date();

  public employees: any[] = [{
    'id': 1,
    'name': 'Akash',
    'age': 34,
    'gender': 'male',
    'place': 'Kannur',
    'Salary': 25000,
    'Ap': 0.67
  },
  {
    'id': 2,
    'name': 'Arun',
    'age': 24,
    'gender': 'male',
    'place': 'Kozhikode',
    'Salary': 35000,
    'Ap': 0.80
  },
  {
    'id': 3,
    'name': 'Hridya',
    'age': 29,
    'gender': 'female',
    'place': 'Malappuram',
    'Salary': 27000,
    'Ap': 0.92
  },
  {
    'id': 4,
    'name': 'Roshan',
    'age': 30,
    'gender': 'male',
    'place': 'Kochi',
    'Salary': 23500,
    'Ap': 0.55
  },
  {
    'id': 5,
    'name': 'Divya',
    'age': 28,
    'gender': 'female',
    'place': 'Kannur',
    'Salary': 29800,
    'Ap': 0.63
  },
  {
    'id': 6,
    'name': 'Shobhitha',
    'age': 34,
    'gender': 'female',
    'place': 'Palakkad',
    'Salary': 30000,
    'Ap': 0.70
  },

  {
    'id': 7,
    'name': 'Hakkim',
    'age': 34,
    'gender': 'male',
    'place': 'Palakkad',
    'Salary': 30000,
    'Ap': 0.79

  }]
}
