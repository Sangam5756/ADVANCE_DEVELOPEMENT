import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@sangam5756/medium-common";



export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>()

// middleware of blogRoute
blogRouter.use("/*", async (c, next) => {
    try {
        const header = (await c.req.header("Authorization")) || "";
        // Bearer token
        const token = header.split(" ")[1];

        // @ts-ignore
        const response = await verify(token, c.env?.JWT_SECRET);

        if (response.id) {
            // @ts-ignore
            c.set("userId", response.id);
            await next();
        } else {
            c.status(403);
            return c.json({ error: "please login" });
        }
    } catch (error) {
        c.status(403);
        return c.json({ error: "please login" });

    }
});


// create new Blog

blogRouter.post("/", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "invalid Inputs"
        })
    }

    // @ts-ignore
    const authorId = c.get("userId");
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: String(authorId)
            }
        })

        return c.json({ id: post.id, message: "publish successfully" })

    } catch (e) {
        c.status(411);
        return c.json({ message: e });

    }


});


blogRouter.put("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    const body = await c.req.json()
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "invalid Inputs"
        })
    }

    try {
        const post = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })

        return c.json({ id: post.id, message: "Updated Successfully" })

    } catch (e) {
        c.status(411);
        return c.text("Invalid");

    }

});





// add pagination
blogRouter.get("/bulk", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    console.log("inside the blog")
    try {
        const post = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        console.log("inside the blog", post)
        return c.json({ post })

    } catch (e) {
        c.status(411);
        return c.text("Invalid");

    }
});


blogRouter.get("/:id", async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())



    try {
        const post = await prisma.post.findFirst({
            where: {
                id: String(id)
            },
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }

        })


        return c.json({ post })

    } catch (e) {
        c.status(411);
        return c.text("Invalid");

    }
});
