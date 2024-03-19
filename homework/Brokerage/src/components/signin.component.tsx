import { UserContext } from "../context/user.context";
import { User } from "../interfaces/user.interface";
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users } from "../data/users";
export const SignIn = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const addUser = (event : any) => {
        event.preventDefault();
        const name = event.target.first_name.value;
        const id = event.target.Id.value;
        const userexisting = Users.find(user=> user.name == name && user.id == id)
        if(!userexisting)
        {
            navigate('/sign-up');
        } 
        else{
             const user: User = {
            name: userexisting?.name,
            lname: userexisting.lname,
            adress:userexisting.adress,
            id: userexisting.id,
        }
        userContext.setUser(user);
        navigate('/');
        }
    }

    return <div>
        <h1>SignIn</h1>
        <h2>you dont have any account? <Link to={'/sign-up'}>To register</Link></h2>
        <form onSubmit={addUser}>
            <input type="text" placeholder="First name" name="first_name" /><br />
            <input type="text" placeholder="Id" name="Id" /><br />
            <button type="submit">Connect</button>
        </form>
    </div>
}
export default SignIn;
