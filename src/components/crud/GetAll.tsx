 import { useEffect, useState } from 'react';
import './Crud.css'
import axios from 'axios';
import { base_api } from '../../Constant';
import Update from './Update';

interface props{

    refresh:boolean;
}

export default function GetAll({refresh}:props){

    const[fetchApi, setFetchApi] = useState<any>([]);
    
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);


    //for showing modal to populate the update modal 

    const [showUpdateModal, setShowUpdateModal] = useState<boolean>(true);

    const handleShowUpdateModal =():any =>{ 
            console.log(showUpdateModal);
        setShowUpdateModal(!showUpdateModal);
    }

        useEffect(() =>{

            const fetch=async()=>{

                const res = await axios.get(`${base_api}reactCrud`)
                setFetchApi(res.data)
                setLoading(loading); 
            }

            fetch();
          

        }, [refresh])

    return(
        <div className="get-all">
              <Update updateModal={showUpdateModal} data={fetchApi}/> 
            
         {  loading && 
                <table  className="table">
                <thead>
                    <tr> 
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Active</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                {fetchApi?.map((data:any) =>( 
                    <tr key={data.id}>
                    <td>{data.firstName} </td>
                    <td>{data.secondName} </td>
                    <td>{data.active ? "Active" : "InActive"} </td>
                   <td><button
                    onClick={() => {handleShowUpdateModal()}}>Update</button></td>
                </tr>
                ))
                }
                </tbody>
            </table>
         }
            </div>
        
    )
}