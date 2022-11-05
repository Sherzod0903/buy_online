
import { useReducer } from "react";
import { createContext } from "react";
import { data } from "../uitils/data";

export const FlowersContext=createContext();
 const FlowerContext=({children})=>{
const [state,dispatch]=useReducer((state,action)=>{},data)

return(
    <FlowersContext.Provider value={[state,dispatch]}>
        {children}
    </FlowersContext.Provider>
)


}
export default FlowerContext;