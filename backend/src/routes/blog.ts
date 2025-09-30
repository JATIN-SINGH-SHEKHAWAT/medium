import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono';
import { sign, verify } from 'hono/jwt';


export const blogRouter = new Hono<{
    Bindings : {
       DATABASE_URL : string,
       JWT_SECRET : string 
    },
    Variables: {
        userId: string;
    }
}>();


//Middleware things 
blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization') || "";
    if (!jwt) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    const payload = await verify(jwt, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        return c.json({ error: "unauthorized" });
    }
    //@ts-ignore
    c.set('userId', payload.id);
    await next()
})



blogRouter.post('/', async (c) => {
    
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const authorId = c.get("userId")
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: authorId
		}
	});
    return c.json( {
        id : post.id
    })
})

blogRouter.put('/', async (c) => {
      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await c.req.json();
	prisma.post.update({
		where: {
			id: post.id,
		},
		data: {
			title: post.title,
			content: post.content
		}
	});
    return c.json( {
        post
    })
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts = await prisma.post.findMany();

    return c.json({
        posts
    })
    
})

blogRouter.get('/:id', async (c) => {
      const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id =  c.req.param("id");
	try {
        const blog  = await prisma.post.findFirst({
		where: {
			id: id,
		},
		
	});
    return c.json( {
        blog
    })
    } catch (error) {
        c.status(411);
        return c.json({
            message: "error while fetching blog post"
        })
    }
})


