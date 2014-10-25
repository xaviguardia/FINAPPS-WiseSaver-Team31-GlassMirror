namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit11 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.KPIs",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        type = c.Int(nullable: false),
                        value = c.Int(nullable: false),
                        desc = c.String(),
                        UserId = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.KPIs");
        }
    }
}
