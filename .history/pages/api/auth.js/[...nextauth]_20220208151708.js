import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
          clientId: "1a91b1acf4c3bd6fae87",
          clientSecret: "c1d42a4ac4c24a94252f98cb3f030650538ec9da"
        })
      ],
})