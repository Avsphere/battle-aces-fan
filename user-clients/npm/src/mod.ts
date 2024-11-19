import { hc } from "hono/client";
import { BattleAcesFanApp } from '@battle-aces-fan/server'

type UserApiClientOptions = {
    url: string
}

export type UserApiClient= ReturnType<typeof UserApiClient>
export const UserApiClient = (options: UserApiClientOptions) => {
    const client = hc<BattleAcesFanApp>(options.url)
    return client;
}
