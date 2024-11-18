import type { AuthorRoute } from '@battle-aces-fan/server'
import { hc } from "hono/client";


type UserApiClientOptions = {
    url: string
}

export type UserApiClient= ReturnType<typeof UserApiClient>
export const UserApiClient = (options: UserApiClientOptions) => {
    const client = hc<AuthorRoute>(options.url)
    return client;
}
