#DROP database filmNow;
CREATE database filmNow;
USE filmNow;

CREATE TABLE users (
    id_user INT AUTO_INCREMENT,
    name_user VARCHAR(100) NOT NULL,
    year_user VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    pass varchar(100) NOT NULL ,
    PRIMARY KEY (id_user)
);


CREATE TABLE films (
    id_film INT AUTO_INCREMENT,
    name_film VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id_film)
);


DELIMITER //
CREATE TRIGGER peliculasUsuario
AFTER UPDATE ON users
FOR EACH ROW 
BEGIN
	
	UPDATE films SET email = new.email WHERE email = old.email;
    
END //
DELIMITER ;


DELIMITER //
CREATE TRIGGER eliminarPeliculas
AFTER DELETE ON users
FOR EACH ROW 
BEGIN
	
	DELETE FROM films WHERE email = old.email;
    
END //
DELIMITER ;


select * from users;
select * from films;

