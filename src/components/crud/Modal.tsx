 

interface modalData {
    firstName: (firstName:string) => void;
    secondName:(secondName:string) => void;
    age:(age:number) => void;
    active:(active:boolean) => void;
    handleCreate:() => void;
    title:string;

}


export default function Modal({firstName,secondName, age, active, handleCreate, title}:modalData){
 

    return(
     <div className="modal-backdrop">
          <form className="modal-main" >
            <h2 className="card-title">{title}</h2>
            <label>
                <span>First Name</span>
            <input type='text' placeholder='first name' onChange={(e)=>{firstName(e.target.value)}}  ></input>
            </label>

            <label>
                <span>Second Name</span>
                <input type='text'  onChange={(e)=>{secondName(e.target.value)}}  ></input>
            </label>

            <label>
                <span>Age</span>
                <input type='text'  onChange={(e)=>{age(parseInt(e.target.value))}}  ></input>
            </label>

            <label>
                <span>Active</span>
                <input type='checkbox' onChange={(e)=>{active(e.target.checked)}} ></input>
            </label>

            <button type="submit" onClick={(e)=>{
                e.preventDefault()
                handleCreate()
            }}>Submit</button>
         </form>  
      </div>
    )
}