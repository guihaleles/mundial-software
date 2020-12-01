CREATE TABLE File (

	Id int Primary key not null AUTO_INCREMENT,
        
        CreationDate DATE NOT NULL,
        
        ExclusionDate DATE,

	Number int NOT NULL,

        CreationFileDate DATE,

        Name varchar(255) NOT NULL,

        -- CustomerAddressId int,

        City varchar(255) NOT NULL,

        Street varchar(255),

        Neighborhood varchar(255),

        HouseNumber int,

        Complement varchar(255),

        CEP varchar(255),

        PhoneNumber varchar(255),

        Profession varchar(255),

        Salary FLOAT,

        -- WorkAddressId int,

        WorkCity varchar(255) NOT NULL,

        WorkStreet varchar(255),

        WorkNeighborhood varchar(255),

        WorkNumber int,

        WorkComplement varchar(255),

        WorkCEP varchar(255),

        CPF int,

        RG int,

        Work varchar(255),

        DateOfBirth DATE,

        PartnerName varchar(255),

        PartnerWork varchar(255),

        PartnerPhone varchar(255),

        PartnerSalary FLOAT,

        ParentsObservation varchar(255),

        OthersStores varchar(255),

        FriendName varchar(255),

        FriendsPhone varchar(255),

        FileObservation varchar(1000),

        -- FOREIGN KEY (CustomerAddress) REFERENCES Address(Id),

        -- FOREIGN KEY (WorkAddress) REFERENCES Address(Id)
); 
