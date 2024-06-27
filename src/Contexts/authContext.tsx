import React, { useState, createContext, ReactNode } from "react";

// Define the interface for user data
export interface UserDataProps {
    email: string;
}

// Define the type for the Auth context
export type AuthType = {
    userData: UserDataProps;
    setUserData: (userData: UserDataProps) => void;
}

// Create the Auth context
const AuthContext = createContext<AuthType | null>(null);

// Define the interface for children props
interface ChildrenProps {
    children: ReactNode;
}

// AuthProvider component
export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserDataProps>(() => {
        const email = localStorage.getItem('@Project:email');
        return email ? { email } : { email: "" };
    });

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
