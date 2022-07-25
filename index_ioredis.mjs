import 'dotenv/config';
import Redis from 'ioredis';

const client = new Redis.Cluster([
    {
      port: process.env.MEMORYDB_PORT,
      host: process.env.MEMORYDB_ENDPOINT,
    },
  ],
  {
    enableAutoPipelining: true,
    dnsLookup: (address, callback) => callback(null, address),
    //  clusterRetryStrategy: (time) => Math.min(time * 2, 500),
    redisOptions: {
      tls: {},
      username: process.env.MEMORYDB_USERNAME,
      password: process.env.MEMORYDB_PASSWORD,
    },
  },
);

await client.set('key', 'ioredis');
const value = await client.get('key');

client.disconnect();

console.log(value);
