// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "../../../config";
import { getSession } from "../../../lib/get-session";
import orm from "../../../lib/orm";
import { ImageInterface } from "../../../src/services/image.service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!config.providers.api.apiKey) {
    res.status(500).send("API key not set");
    return;
  }

  const session = await getSession(req, res);

  const { data } = await axios.get(
    `${config.providers.api.baseUrl}/images/small`,
    { headers: { "x-api-key": config.providers.api.apiKey } }
  );

  const images = data.map((image: ImageInterface) => {
    const likes = orm.find(image.url) || 0;
    return {
      ...image,
      likes: likes + image.likes,
      isLikedByMe: session.isLikedByMe && session.isLikedByMe[image.url],
    };
  });

  res.status(200).json(images);
}
