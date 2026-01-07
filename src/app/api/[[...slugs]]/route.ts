import { redis } from "@/lib/redis";
import Elysia from "elysia";
import { nanoid } from "nanoid";

const ROOM_TTL_SECONDS = 60 * 10;


const room = new Elysia({ prefix: "/room" }).post("/create", async () => {
    const roomId = nanoid();
    redis.hset(`meta:${roomId}`, {
        connected: [],
        createdAt: Date.now()
    })
    redis.expire(`meta:${roomId}`, ROOM_TTL_SECONDS);
    return { roomId }
})



export const app = new Elysia({ prefix: "/api/v1" }).use(room)

export const GET = app.fetch
export const POST = app.fetch


