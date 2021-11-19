This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, add .env file by creating `.env`, in this example you can copy `.env.example` contents or simply rename it.

```bash
# copy file
cp .env.example .env
# or rename file
mv .env.example .env
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Structure

You can find the API proxy in `pages/api/images`.
You can find the state management and client side components files in src.

# Assumptions

I was thinking of using a real database with docker (docker-compose for development) but in second though, I guess it's a bit of an overhead for this kind of assignment.<br />
So I decided to just use in-memory database. (Map or Set).
<br />
P.S - I've had a bit hard times to keep persistency with in-memory store using Map and I believe it's better using external storage such as redis or actual database.

## Things I couldn't figure out..

1. I haven't found a way to get offset and limit of images, I thought of maybe using virtualization or infinite scroll but wasn't sure what is expected from me.<br />
P.S - query params like `?page=X` or `?limit=X` or `?offset=X` wasn't working for me..

2. I used the `url` as the identifier of the images since there's no `id`.<br />
I was thinking to map the images response and add a generated uuid to each image but wasn't sure if it worths the effort and the best practice for this use-case.

## Tests

A Tech Debt I didn't get to..

## Libraries I used
- [nextjs](https://nextjs.org)
- [chakra-ui](https://chakra-ui.com)
- [framer-motion](https://www.framer.com/motion)
- [phosphoricons](https://phosphoricons.com)
- [next-session](https://github.com/hoangvvo/next-session)