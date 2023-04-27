-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "visits" BIGINT NOT NULL DEFAULT 0,
    "creator" TEXT,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
