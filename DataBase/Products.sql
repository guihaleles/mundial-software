CREATE TABLE Products (

	Id int Primary key not null AUTO_INCREMENT,

        Number int NOT NULL,

        Name varchar(255) NOT NULL,
        
        CreationDate DATE NOT NULL,
        
        ExclusionDate DATE,

        Type varchar(255),

        Observation varchar(255),

        Value FLOAT
        
); 
