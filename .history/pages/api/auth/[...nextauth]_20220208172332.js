import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
          clientId: process.env.GITHUB_ID,
          clientSecret: GITHUB_SECRET
        })
      ],
})