/*
  Warnings:

  - A unique constraint covering the columns `[login_student]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login_teacher]` on the table `teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "student_login_student_key" ON "student"("login_student");

-- CreateIndex
CREATE UNIQUE INDEX "teacher_login_teacher_key" ON "teacher"("login_teacher");
