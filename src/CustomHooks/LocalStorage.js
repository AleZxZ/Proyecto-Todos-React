import { useState } from "react";

//EL useLocalStorage es aplicando el CUSTOM HOOKS creando tu propio CUSTOM HOOKS 
function useLocalStorage(itemName,initialValue){
  

    const datosLocalStorage=localStorage.getItem(itemName);
    let dataItems;
    if(!datosLocalStorage){
      localStorage.setItem(itemName,JSON.stringify(initialValue))
      dataItems=initialValue;
    }else{
      dataItems=JSON.parse(datosLocalStorage)
    }
  
    const [item,setItemLocalStorage]=useState(dataItems);
    const saveItem=(newItem)=>{
      localStorage.setItem('data',JSON.stringify(newItem))
      setItemLocalStorage(newItem);
    };
  
    return [item,saveItem]
  
}

export {useLocalStorage};