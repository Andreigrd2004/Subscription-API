import {config} from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const {ARCJET_KEY, ARCJET_ENV, DB_URI, PORT, NODE_ENV, JWT_SECRET, JWT_EXPIRES_IN} = process.env;