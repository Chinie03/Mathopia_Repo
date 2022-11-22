import { StringLiteral } from "typescript";

                                                
type MyCompType = {
    name?: string;
   
}

export default function MyComp(props:MyCompType) {
    return (
        <div>
            <h2 >Hey {props.name}, let's have fun!</h2>      
            
        </div>
    )
}