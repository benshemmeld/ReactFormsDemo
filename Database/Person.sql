CREATE TABLE [dbo].[Person]
(
	[PersonId] INT NOT NULL PRIMARY KEY, 
    [Firstname] NVARCHAR(100) NOT NULL, 
    [Lastname] NVARCHAR(100) NOT NULL, 
    [DateOfBirth] DATETIME NOT NULL, 
    [Gender] INT NOT NULL
)
