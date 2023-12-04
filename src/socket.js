import {io} from "socket.io-client";
const URL=process.env.NODE_ENV === "production"
 export const socket=io("https://localhost:5000");