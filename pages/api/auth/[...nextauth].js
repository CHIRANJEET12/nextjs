import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'

export const authOptions={
    providers:[
        GithubProvider({
            clientId:'Ov23liFeHZMvxlZD0wXJ',
            clientSecret:'b9ca9f94a725b1d945b6e52f8b9a8f9821e64c99',
        }),
    ],
};

export default NextAuth(authOptions)