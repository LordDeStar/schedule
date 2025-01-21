-- CreateTable
CREATE TABLE "calls" (
    "number_call" SERIAL NOT NULL,
    "time_lesson_start" TIME(6) NOT NULL,
    "time_lesson_end" TIME(6) NOT NULL,
    "time_end_without_lunch" TIME(6),

    CONSTRAINT "calls_pkey" PRIMARY KEY ("number_call")
);

-- CreateTable
CREATE TABLE "class" (
    "id_class" SERIAL NOT NULL,
    "title_class" VARCHAR(30) NOT NULL,
    "id_teacher" INTEGER NOT NULL,

    CONSTRAINT "class_pkey" PRIMARY KEY ("id_class")
);

-- CreateTable
CREATE TABLE "days_of_week" (
    "id_day" SERIAL NOT NULL,
    "title_day" VARCHAR(20) NOT NULL,

    CONSTRAINT "days_of_week_pkey" PRIMARY KEY ("id_day")
);

-- CreateTable
CREATE TABLE "grade_sheet" (
    "id_sheet" SERIAL NOT NULL,
    "id_student" INTEGER NOT NULL,
    "id_teacher" INTEGER NOT NULL,
    "id_subject" INTEGER NOT NULL,
    "comment_sheet" VARCHAR(200),
    "grade_number" VARCHAR(2),

    CONSTRAINT "grade_sheet_pkey" PRIMARY KEY ("id_sheet")
);

-- CreateTable
CREATE TABLE "schedule_table" (
    "id_schedule" SERIAL NOT NULL,
    "id_class" INTEGER NOT NULL,
    "id_teacher" INTEGER NOT NULL,
    "id_subject" INTEGER NOT NULL,
    "classroom_title" VARCHAR(10) NOT NULL,
    "number_call" INTEGER NOT NULL,
    "id_day" INTEGER NOT NULL,

    CONSTRAINT "schedule_table_pkey" PRIMARY KEY ("id_schedule")
);

-- CreateTable
CREATE TABLE "student" (
    "id_student" SERIAL NOT NULL,
    "name_student" VARCHAR(100) NOT NULL,
    "surname_student" VARCHAR(100) NOT NULL,
    "patronymic_student" VARCHAR(100) NOT NULL,
    "login_student" VARCHAR(100) NOT NULL,
    "password_student" VARCHAR(100) NOT NULL,
    "id_class" INTEGER NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id_student")
);

-- CreateTable
CREATE TABLE "subject" (
    "id_subject" SERIAL NOT NULL,
    "title_subject" VARCHAR(100) NOT NULL,

    CONSTRAINT "subject_pkey" PRIMARY KEY ("id_subject")
);

-- CreateTable
CREATE TABLE "teacher" (
    "id_teacher" SERIAL NOT NULL,
    "name_teacher" VARCHAR(100) NOT NULL,
    "surname_teacher" VARCHAR(100) NOT NULL,
    "patronymic_teacher" VARCHAR(100) NOT NULL,
    "login_teacher" VARCHAR(100) NOT NULL,
    "password_teacher" VARCHAR(100) NOT NULL,
    "id_subject" INTEGER NOT NULL,
    "email_teacher" VARCHAR(40),
    "telegram_teacher" VARCHAR(50),
    "phone_teacher" VARCHAR(20) NOT NULL,

    CONSTRAINT "teacher_pkey" PRIMARY KEY ("id_teacher")
);

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id_teacher") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grade_sheet" ADD CONSTRAINT "grade_sheet_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "student"("id_student") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grade_sheet" ADD CONSTRAINT "grade_sheet_id_subject_fkey" FOREIGN KEY ("id_subject") REFERENCES "subject"("id_subject") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "grade_sheet" ADD CONSTRAINT "grade_sheet_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id_teacher") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule_table" ADD CONSTRAINT "schedule_table_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "class"("id_class") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule_table" ADD CONSTRAINT "schedule_table_id_day_fkey" FOREIGN KEY ("id_day") REFERENCES "days_of_week"("id_day") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule_table" ADD CONSTRAINT "schedule_table_id_subject_fkey" FOREIGN KEY ("id_subject") REFERENCES "subject"("id_subject") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule_table" ADD CONSTRAINT "schedule_table_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id_teacher") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule_table" ADD CONSTRAINT "schedule_table_number_call_fkey" FOREIGN KEY ("number_call") REFERENCES "calls"("number_call") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_id_class_fkey" FOREIGN KEY ("id_class") REFERENCES "class"("id_class") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "teacher" ADD CONSTRAINT "teacher_id_subject_fkey" FOREIGN KEY ("id_subject") REFERENCES "subject"("id_subject") ON DELETE NO ACTION ON UPDATE NO ACTION;
