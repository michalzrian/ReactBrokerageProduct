import { User } from "../interfaces/user.interface";
import { createContext } from 'react';
export type userContext = {
    user? : User,
    setUser : Function,
    
} 
export const UserContext = createContext<userContext>({})
