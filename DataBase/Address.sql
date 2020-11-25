CREATE TABLE Address (

	Id int Primary key not null AUTO_INCREMENT,
        
        CreationDate DATE NOT NULL,
        
        ExclusionDate DATE,

        City varchar(255) NOT NULL,

        Street varchar(255),

        Neighborhood varchar(255),

        HouseNumber int,

        Complement varchar(255),

        CEP varchar(255)

); 
