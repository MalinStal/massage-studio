import React from 'react'

export function dateFunction() {
    
        const today = new Date();
        const date = today.setDate(today.getDate()); 
        const defaultValue = new Date(date).toISOString().split('T')[0] 
        return defaultValue
        
}
  /*const newDate = new Date() ;
  const day = newDate.getDate().toString().padStart(2,0);
  const month = (newDate.getMonth() +1).toString().padStart(2,0);
  const year = newDate.getFullYear();
  const currentDate= `${year}-${month}-${day}`
  return currentDate*/

    