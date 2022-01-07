create database myDatabase;
use myDatabase;

create table message(sequence int auto_increment,msg varchar(500),primary key(sequence));

select * from message;

alter user 'root'@'localhost' identified with mysql_native_password by 'cdac';
