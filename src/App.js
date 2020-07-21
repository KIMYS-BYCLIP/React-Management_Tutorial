import React, {Component}  from 'react';
import Customer from './components/Customer'

import './App.css';

const customers  = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': 'Go Go GO Let;s Go 1 !',
  'birthday': '961221',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': 'Go Go GO Let;s Go 2 !',
  'birthday': '961222',
  'gender' : '여자',
  'job' : '중학생'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': 'Go GO Let;s Go 3 !',
  'birthday': '961223',
  'gender' : '남자',
  'job' : '초등학생'
},
{
  'id' : 4,
  'image' : 'https://placeimg.com/64/64/4',
  'name': 'Go GO Let;s Go 4 !',
  'birthday': '961224',
  'gender' : '여자',
  'job' : '유아'
}
]

class App extends Component {
  render(){

    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.bortjday}
              gender={c.gender}
              job={c.job}
              />

            );
          }
         )
        }
      </div>
    );

  }

}

export default App;
