// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "../../../../lib/get-session";
import orm from "../../../../lib/orm";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  let { url } = req.query;

  if (Array.isArray(url)) {
    url = url[0];
  }

  const likes = orm.find(url) || 0;

  if (session.isLikedByMe) {
    return res.status(200).json({ likes: likes });
  }

  orm.upsert(url, likes + 1);

  session.isLikedByMe = true;

  session.destroy();

  // Like created
  return res.status(201).json({ likes: likes + 1 });
}
