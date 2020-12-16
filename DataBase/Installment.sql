CREATE TABLE Installments (

	Id int Primary key not null AUTO_INCREMENT,

        Number int NOT NULL,
        
        CreationDate DATE NOT NULL,
        
        ExclusionDate DATE,

        ServiceOrderId int,

        ProductId int,

        OriginalValue FLOAT,
	
	NewValue FLOAT,
	
	DivisionNumber int,

	PaindValue FLOAT,
	
	Observation varchar(255),
       
        FOREIGN KEY (ServiceOrderId) REFERENCES ServiceOrders(Id),
 	FOREIGN KEY (ProductId) REFERENCES Products(Id)
); 
