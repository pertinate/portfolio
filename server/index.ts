import express, { Request, Response } from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080;

(
    async () => {
        try {
            await app.prepare();
            const server = express();

            server.all("*", (request: Request, response: Response) => {
                return handle(request, response);
            });

            server.listen(port, (error?: any) => {
                if (error) {
                    throw error;
                }

                console.log(`Ready on http://localhost:${port}/`);
            });
        } catch (e) {
            console.error(e);
            process.exit(1);
        }
    }
)();
