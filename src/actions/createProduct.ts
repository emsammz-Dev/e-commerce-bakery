"use server"
import prisma from "@/db/prismadb";

export default async function createProduct(formData:FormData) {
    await prisma.product.create({
        data: {
          p_name: formData.get("name") as string,
          p_descrn: formData.get("description") as string,
          price: Number(formData.get("price")),
        },
      });
}