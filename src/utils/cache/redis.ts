import { createClient } from "redis";

import { dbConfig } from "@/conf/dbConfig";

class CacheClient {

    private client: any;

    constructor() {
        this.connect();
    }

    async connect() {
        this.client = await createClient({ url: dbConfig.redis_url }).connect();
    }

    get redisClient() {
        return this.client;
    }
}

export default new CacheClient();