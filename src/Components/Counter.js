// import React, { useState, useEffect } from 'react';
import UseDocumentCount from './UseDocumentCount'

export default function Counter(){

  const { count, increment, decrement } = UseDocumentCount()

  // function cleanUpCallback(){
  //   document.title = 'React App'
  // }

  // function callback(){
  //   if(count !== 0){
  //   document.title = `React App v1.${count}`
  //   }
  //   return cleanUpCallback
  // }

  // useEffect( callback, [count] );

  return (
    <div>
      <h1>This is our Counter!</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Add Me</button>
      <button onClick={decrement}>Take Me Away!</button>
    </div>
  );
};
