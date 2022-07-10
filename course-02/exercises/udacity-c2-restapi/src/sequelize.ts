import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


const c = config.dev;

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  // "username": c.username,
  // "password": c.password,
  // "database": c.database,
  // "host":     c.host,
  
  username: "postgres123",
  password: "postgres123",
  database: "postgres",
  port: 5432,
  host: "my-db-for-udacity.ccxdyktatku2.ap-southeast-1.rds.amazonaws.com",
  dialect: 'postgres',
  storage: ':memory:',
});

