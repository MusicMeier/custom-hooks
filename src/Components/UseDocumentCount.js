import React, {useState, useEffect} from 'react';

function UseDocumentCount(){

  const [ count, setCount ] = useState(0)

  useEffect( () => {
    if(count !== 0){
      document.title = `React App v1.${count}`
      }
      return () => {
        document.title = 'React App'
      }
    }, [count] );

    const increment = () => {setCount(count + 1)}
    const decrement = () => {setCount(count - 1)}
    
  return {
    count,
    increment,
    decrement
  }
}

export default UseDocumentCount;
