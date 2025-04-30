import React, { createContext, use } from 'react'

export const BioContext = createContext();

export const BioProvider=({children})=>{

const myName="shyamal"
const myAge=22;

return(
  <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>
)
} 

export const useBioContext=()=>{
  const context =use(BioContext);
  return context;
}