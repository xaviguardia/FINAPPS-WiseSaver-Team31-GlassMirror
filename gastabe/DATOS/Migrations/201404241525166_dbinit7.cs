namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit7 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.DesStores",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Lat = c.Double(nullable: false),
                        Lng = c.Double(nullable: false),
                        Address = c.String(),
                        Address2 = c.String(),
                        Country = c.String(),
                        Email = c.String(),
                        Website = c.String(),
                        Phone = c.String(),
                        CountryName = c.String(),
                        StoreId = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.DesStores");
        }
    }
}
