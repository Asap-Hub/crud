 

interface modalData {
    // id?: (id:number) =>void;
    name?: string;
    lastName?: string;
    myAge?:string;
    myActive?: string;
    firstName: (firstName:string) => void;
    secondName:(secondName:string) => void;
    age:(age:number) => void;
    active:(active:boolean) => void;
    handleClick:() => void;
    title:string;
    buttonTitle:string;

}


export default function Modal({
    firstName,secondName, age, active, handleClick, title, buttonTitle, name, lastName, myAge, myActive
}:modalData){
 

    return(
     <div className="modal-backdrop">
          <form className="modal-main" >
            <h2 className="card-title">{title}</h2>
            <label>
                <span>First Name</span>
            <input type='text' placeholder='First Name' value={name}  onChange={(e)=>{firstName(e.target.value)}}  ></input>
            </label>

            <label>
                <span>Second Name</span>
                <input type='text' placeholder="Second Name"  onChange={(e)=>{secondName(e.target.value)}}  ></input>
            </label>

            <label>
                <span>Age</span>
                <input type='text' placeholder="Age" onChange={(e)=>{age(parseInt(e.target.value))}}  ></input>
            </label>

            <label>
                <span>Active?</span>
                <input type='checkbox' onChange={(e)=>{active(e.target.checked)}} ></input>
            </label>

            <button type="submit" onClick={(e)=>{
                e.preventDefault()
                handleClick()
            }}>{buttonTitle === 'Create' ? 'Create': 'Update'}</button>
         </form>  
      </div>
    )
}