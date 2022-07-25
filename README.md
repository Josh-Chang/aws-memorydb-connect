# aws-memorydb-connect
An example for connecting to MemoryDB cluster with TLS and password auth enabled for both npm [io-redis](https://www.npmjs.com/package/ioredis) & [node-redis](https://www.npmjs.com/package/redis)

## Prerequisite
- Create a cluster of MemoryDB for Redis

## Installation
- `git clone https://github.com/Josh-Chang/aws-memorydb-connect`
- `cd aws-memorydb-connect`
- `yarn`
- add your own .env file

## Run
- `node index_ioredis.mjs`
- `node index_noderedis.mjs`
