import { useEffect, useState } from "react"
import Modal from "./Modal";
import axios from "axios";
import { base_api } from "../../Constant";

interface props{
    updateModal?:boolean
    data:any
}

export default function Update({updateModal, data}:props){
    

    const ModalTitle = "Update Data";

    const[userId, setUserId] = useState<any>(null);     
    const[firstName, setFirstName] = useState<any>('');
    const[secondName, setSecondName] = useState<any>('');
    const[age, setAge] = useState<any>();
    const[active, setActive] = useState<any>(false);

   const handleUpdate =(data:any) =>{ 
    
    let {id, firstName, lastName, age, active} = data;

    localStorage.setItem('ID', id);
    localStorage.setItem('FirstName', firstName);
    localStorage.setItem('LastName', lastName);
    localStorage.setItem('Age', age);
    localStorage.setItem('Active', active);
     
    }

    useEffect(() =>{

       
        setUserId(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setSecondName(localStorage.getItem('LastName'));
        setAge(localStorage.getItem('Age'));
        setActive(localStorage.getItem('Active'))
    },[handleUpdate(data)]);

    console.log(handleUpdate );
 
    const updateData= () => {
        axios.put(`${base_api}reactCrud/${userId}`,{
            firstName,
            secondName,
            age,
            active
        })
         
    }
  

return(
    <div>
{!updateModal &&
  <Modal 

        // id={(userId) =>{setUserId(userId)}}
        name={firstName}
        lastName={secondName}
        myAge={age}
        myActive={active}

        title={ModalTitle}
        buttonTitle='Update'
        firstName={(firstName) => {setFirstName(firstName)}}
        secondName={(secondName) => {setSecondName(secondName)}}
        age={(age) => {setAge(age)}}
        active={(active) =>{setActive(active)}}
        handleClick={() =>updateData}
        /> }
    </div>
)

}