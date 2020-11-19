CREATE TABLE File (

	Id int Primary key not null AUTO_INCREMENT,
        
        CreationDate DATE NOT NULL,
        
        ExclutionDate DATE,

	Number int NOT NULL,

        CreationFileDate DATE,

        Name varchar(255) NOT NULL,

        CustomerAddressId int,

        PhoneNumber varchar(255),

        Profession varchar(255),

        Salary FLOAT,

        WorkAddressId int,

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

        FOREIGN KEY (CustomerAddress) REFERENCES Address(Id),

        FOREIGN KEY (WorkAddress) REFERENCES Address(Id)
); 
