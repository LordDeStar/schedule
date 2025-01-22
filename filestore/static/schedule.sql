create database schedule_db;
use schedule_db;

create table subject(
	id_subject int primary key auto_increment,
    title_subject varchar(100) not null
);

create table days_of_week(
	id_day int primary key auto_increment,
    title_day varchar(20) not null
);

create table teacher(
	id_teacher int primary key auto_increment,
    name_teacher varchar(100) not null,
    surname_teacher varchar(100) not null,
    patronymic_teacher varchar(100) not null,
	login_teacher varchar(100) not null,
    password_teacher varchar(100) not null,
    id_subject int not null,
    email_teacher varchar(40),
    telegram_teacher varchar(50),
    phone_teacher varchar(20) not null,
	
    foreign key (id_subject) references subject(id_subject)
);


create table class(
	id_class int primary key auto_increment,
    title_class varchar(30) not null,
	id_teacher int not null,
    foreign key (id_teacher) references teacher(id_teacher)
); 

create table student(
	id_student int primary key auto_increment,
    name_student varchar(100) not null,
    surname_student varchar(100) not null,
    patronymic_student varchar(100) not null,
    login_student varchar(100) not null,
    password_student varchar(100) not null,
    id_class int not null,
    foreign key (id_class) references class(id_class)
);


create table calls(
	number_call int primary key auto_increment,
    time_lesson_start time not null,
    time_lesson_end time not null,
    time_end_without_lanch time
);

create table schedule_table(
	id_shedule int primary key auto_increment,
    id_class int not null,
    id_teacher int not null,
    id_subject int not null,
    classroom_title varchar(10) not null,
    number_call int not null,
    id_day int not null,
    
    foreign key (id_class) references class(id_class),
    foreign key (id_teacher) references teacher(id_teacher),
    foreign key (id_subject) references subject(id_subject),
    foreign key (number_call) references class(number_call),
    foreign key (id_day) references days_of_week(id_day)
);

create table grade_sheet(
	id_sheet int primary key auto_increment,
    id_student int not null,
    id_teacher int not null,
    id_subject int not null,
    comment_sheet varchar(200),
    grade_number varchar(2)
);


