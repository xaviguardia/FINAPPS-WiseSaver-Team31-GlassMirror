namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class consultasgeo : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ConsultasGeos",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Fecha = c.DateTime(nullable: false),
                        Lat = c.Double(nullable: false),
                        Lng = c.Double(nullable: false),
                        Results = c.Int(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ConsultasGeos");
        }
    }
}
