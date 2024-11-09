-- CreateTable
CREATE TABLE "login" (
    "id" SERIAL NOT NULL,
    "userName" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "login_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "login_userName_key" ON "login"("userName");
