import redis from 'redis';
import { promisify } from 'util';

export const client = redis.createClient({
  port: 6379,
  host: '127.0.0.1',
});

client.on('error', function (error) {
  console.error(error);
});

client.on('connect', () => {
  console.log('Conectado a redis server');
});

export const setData = (usuario: string, password: string) => {
  client.hset('listUser', 'usuario', usuario, 'password', password);
};

export const getData = () => {
  let lisData = client.mget('listUser');

  console.log(lisData);
};
