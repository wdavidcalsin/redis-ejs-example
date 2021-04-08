import redis from 'redis';
import { promisify } from 'util';

export const client = redis.createClient();

client.on('error', function (error) {
  console.error(error);
});

client.on('connect', () => {
  console.log('Conectado a redis server');
});

client.set('key1', 'hola mundo1');
client.set('key2', 'hola mundo2');
client.set('key3', 'hola mundo2');

client.exists('key2', function (err, reply) {
  if (reply == 1) {
    console.log('exists');
  } else {
    console.log("doesn't exist");
  }
});
