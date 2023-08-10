import {AuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
 
import {LoginInputs} from "@/components/LoginForm/types/types";


export const authConfig: AuthOptions = {
  providers: [
   CredentialsProvider({
     id: 'credentials',
     credentials: {},
     async authorize(credentials) {
       const {email, csrfToken } = credentials as LoginInputs & {csrfToken: string};
       const user = { id: csrfToken, email }

       if (user.id) {
         return user
       } else {
         return null
       }
     }
   })
  ],
  pages: {
    signIn: '/login',
  },
};
