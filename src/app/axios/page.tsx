import axios from "axios"
import { url } from "inspector";

 const getData = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    return response.data;
 }



export default async function Axios() {
    const response = await getData();
    console.log({response});
    return(
        <>
        <h2>axios</h2>
        
        </>
    )
}
