import 'dotenv/config';
import { createCluster } from 'redis';

const client = createCluster({
  rootNodes: [
    {
      url: `rediss://${process.env.MEMORYDB_ENDPOINT}:${process.env.MEMORYDB_PORT}`,
    },
    // {
    //     url: "rediss://redis-2-url:6379",
    // },
    // {
    //     url: "rediss://redis-3-url:6379",
    // },
  ],
  useReplicas: true,
  defaults: {
    username: process.env.MEMORYDB_USERNAME,
    password: process.env.MEMORYDB_PASSWORD,
    socket: { tls: true },
  },
});

client.on('connected', () => console.log('connected to redis'));
client.on('error', (err) => console.log('Redis client Error', err));

console.log('before connection');

await client.connect();

console.log('connected to client...');

await client.set('key', 'redisNode');
const value = await client.get('key');

console.log(value);

await client.disconnect();
