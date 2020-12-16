CREATE TABLE ServiceOrders (

	Id int Primary key not null AUTO_INCREMENT,

        Number int NOT NULL,
        
        CreationDate DATE NOT NULL,
        
        ExclusionDate DATE,

        SalesmanId int,

        FileId int,

        Patient varchar(255),
	
	CreditCard varchar(255),
	
	EsfericOD Float,

	CilindricOD FLOAT,

        AxisOD FLOAT,

        DNPOD FLOAT,

        ACOOD FLOAT,

        EyelidOD FLOAT,

        EsfericOE FLOAT,

        CilindricOE FLOAT,

        AxisOE FLOAT,

        DNPOE FLOAT,

        ACOOE FLOAT,

        EyelidOE FLOAT,

        Vertical FLOAT,

        Horizontal FLOAT,

        Diagonal FLOAT,

        Ponte FLOAT,
	
	Observation varchar(255),

	FOREIGN KEY (FileId) REFERENCES File(Id),

	FOREIGN KEY (SalesmanId) REFERENCES Salesmans(Id)

        
); 
