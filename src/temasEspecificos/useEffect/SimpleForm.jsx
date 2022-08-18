 
import { useForm } from "../useHooksFormulario/useForm";
import { MEssage } from "./MEssage";


const SimpleForm = () => {

 const {onInputChange, username, email, password} = useForm({
    username:'',
    email:'',
    password:''
 });
 
 //const {  username, email, password} = formState;

  return (
    <div> 
        
        <h3>SimpleForm</h3>

        <input 
        type="text" 
        className='inputFrom' 
        placeholder='Username' 
        name='username' 
        value={username}
        onChange={ onInputChange}
        />

        <input 
        type="email" 
        className='inputFrom' 
        placeholder='carlos@gmail.com' 
        name='email' 
        value={email}
        onChange={ onInputChange}
        
        />

<input 
        type="password" 
        className='inputFrom' 
        placeholder='*******' 
        name='password' 
        value={password}
        onChange={ onInputChange}
        
        />
    
    { (username === 'carlosmsc') && <MEssage />}
    
    
    </div>
  )
}

export default SimpleForm