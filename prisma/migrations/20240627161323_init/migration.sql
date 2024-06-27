-- CreateTable
CREATE TABLE "Product" (
    "p_id" TEXT NOT NULL,
    "p_name" TEXT NOT NULL,
    "p_image" TEXT NOT NULL,
    "p_descrn" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("p_id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "rate" TEXT NOT NULL,
    "productP_id" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product_Avail" (
    "id" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "productP_id" TEXT NOT NULL,

    CONSTRAINT "Product_Avail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_p_name_key" ON "Product"("p_name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_Avail_productP_id_key" ON "Product_Avail"("productP_id");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_productP_id_fkey" FOREIGN KEY ("productP_id") REFERENCES "Product"("p_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product_Avail" ADD CONSTRAINT "Product_Avail_productP_id_fkey" FOREIGN KEY ("productP_id") REFERENCES "Product"("p_id") ON DELETE RESTRICT ON UPDATE CASCADE;
