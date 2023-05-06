import { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { base_api } from '../../Constant';
 
interface props{
   setRefresh:()=>void
}

export default function Create({setRefresh}:props){

     const[showCreateModal, setShowCreateModal] = useState<boolean>(false);

     
    const[firstName, setFirstName] = useState<string>('');
    const[secondName, setSecondName] = useState<string>('');
    const[age, setAge] = useState<number>();
    const[active, setActive] = useState<boolean>(false);

    const ModalTitle = "Create Data";

       function handleModal (){
         setShowCreateModal(!showCreateModal);
        }

        const handleCreate = () =>{ 
         const result = axios.post(`${base_api}reactCrud`,
            {
               firstName,
               secondName,
               age,
               active
            }) 
            setShowCreateModal(false);
            setRefresh()
        }

    return (
       <div className="create-header">

      {showCreateModal && <Modal 
      title={ModalTitle}
      buttonTitle='Create'
      firstName={(firstName)=>{setFirstName(firstName)}}
      secondName={(secondName) => {setSecondName(secondName)}}
      age={(age) =>{setAge(age)}}
      active={(active) => setActive(active)}
      handleClick={() => handleCreate()}
      ></Modal>}

       <button type="button" onClick={handleModal}>Create</button>
       </div>
    )
}