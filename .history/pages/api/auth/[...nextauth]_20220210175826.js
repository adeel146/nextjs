import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";


export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    providers.goo
  ],
  database:process.env.DB_URL,
  session:{
    jwt:true
  },
  jwt:{
    secret:"jhdgsdgd"
  }
});
