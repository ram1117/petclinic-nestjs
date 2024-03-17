-- DropForeignKey
ALTER TABLE "WorkDay" DROP CONSTRAINT "WorkDay_doctorId_fkey";

-- AddForeignKey
ALTER TABLE "WorkDay" ADD CONSTRAINT "WorkDay_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
