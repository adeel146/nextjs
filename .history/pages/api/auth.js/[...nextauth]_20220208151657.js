import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
          clientId: "1a91b1acf4c3bd6fae87",
          clientSecret: ""
        })
      ],
})