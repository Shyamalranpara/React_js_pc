import React from 'react';
import Sdata from '../Api/Sdata';
import SeriesData from './SeriesData';

const Loop = () => {
//   const obj={
//     name:"shyamal"
//   }
//   console.log(obj.name)
  
//   const name="shyamal"
//   const age ="14"
//   const obj1={name,age};
// console.log(obj1);


/* ex of destructring  */
const name=" madhav"
const age ="12"
const obj2={
  name,age
}
console.log(obj2)

  return (
    <ul className="grid grid-three-cols">
      {Sdata.map((el) => (
        <SeriesData key={el.id} data={el} />
      ))}
    </ul>
  );
};

export default Loop;
