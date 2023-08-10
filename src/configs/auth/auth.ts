import {AuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import {LoginInputs} from "@/components/LoginForm/types/types";


export const authConfig: AuthOptions = {
  providers: [
   CredentialsProvider({
     id: 'credentials',
     credentials: {},
     async authorize(credentials) {
       const {email, token } = credentials as LoginInputs & {token: string};
       const user = { id: token, email }

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
