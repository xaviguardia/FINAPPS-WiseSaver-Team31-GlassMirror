namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit4 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.EmailsLogs",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        To = c.String(),
                        Subject = c.String(),
                        Body = c.String(),
                        Status = c.Boolean(nullable: false),
                        ExtraInfo = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RemindersUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        UserId = c.Int(nullable: false),
                        UserName = c.String(),
                        Email = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UpdateInstaLogs",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        EllapsedTime = c.Long(nullable: false),
                        RecollectedData = c.Int(nullable: false),
                        Status = c.Boolean(nullable: false),
                        ExtraInfo = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UpdateInstaLogs");
            DropTable("dbo.RemindersUsers");
            DropTable("dbo.EmailsLogs");
        }
    }
}
