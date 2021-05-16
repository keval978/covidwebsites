import React,{useEffect,useState} from 'react'
import './App.css';

function Covid() {

    const [data, setData] = useState([]);
useEffect(()=>{

 

    const fetchapi =async()=>{
        const url = `https://api.covid19api.com/summary`
        const  response = await fetch(url);
        const resjson = await response.json();
        console.log(resjson);
        var Countries = resjson.Countries
        
    
         setData(Countries) 
    }
fetchapi();
},[]);

    return (
        <div>
          <h1>Corona virus data</h1>
          <div className="main">
            <table>
                <tr>
                    
                    <th>Country</th>
                    <th>TotalConform</th>
                    <th>TotalDeath</th>
                    <th>TotalRecovery</th>
                </tr>
                <tbody>
                    {
                        data.map((val,index)=>(
                            <tr key={index}>

                                <td>{val.Country}</td>
                                <td>{val.TotalConfirmed}</td>
                                <td>{val.TotalDeaths}</td>
                                <td>{val.TotalRecovered}</td>            
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Covid
