/*
  Warnings:

  - A unique constraint covering the columns `[slotId]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Appointment_slotId_key" ON "Appointment"("slotId");
