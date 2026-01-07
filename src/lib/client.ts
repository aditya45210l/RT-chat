import { app } from "@/app/api/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";


export const client = treaty<typeof app>('localhost:3000').api