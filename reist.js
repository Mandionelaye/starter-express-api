const {createClient } = require('redis');

const redis = createClient();

await redis.connect();

const client = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();


// const value = await client.get("key");
// client.destroy();

const setElm = async (keys, value) => {
   await client.set(keys, value);
   return 'valide';
}

const getElm = async (keys) => {
  const value = await client.get("key");
   return value;
}


module.exports = {setElm, getElm};