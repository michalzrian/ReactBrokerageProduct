import { UserContext } from "../context/user.context";
import { Users } from "../data/users";
import { User } from "../interfaces/user.interface";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export const SignUp = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const addUser = (event : any) => {
        event.preventDefault();
        const user: User = {
            name: event.target.first_name.value,
            lname: event.target.Last_name.value,
            adress: event.target.Adress.value,
            id: event.target.Id.value,
        }
        Users.push(user);
        console.log(Users)
        userContext.setUser(user);
        navigate('/');

    }

    return <div>
        <h2>You dont have any count</h2>
        <h1>SignUp here</h1>
        <form onSubmit={addUser}>
            <input type="text" placeholder="First name" name="first_name" /><br />
            <input type="text" placeholder="Last name" name="Last_name" /><br />
            <input type="text" placeholder="Adress" name="Adress" /><br />
            <input type="text" placeholder="Id" name="Id" /><br />
            <button type="submit">Save</button>
        </form>
    </div>
}
export default SignUp;
