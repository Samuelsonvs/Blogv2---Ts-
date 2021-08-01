// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const contactData = JSON.parse(req.body);

  const user = await prisma.contact.findFirst({
    where: {
      email: contactData.email,
    },
  });

  if (user) {
    res.json(1);
  } else {
    const savedContact = await prisma.contact.create({
      data: contactData,
    });
    res.json(savedContact);
  }
}
