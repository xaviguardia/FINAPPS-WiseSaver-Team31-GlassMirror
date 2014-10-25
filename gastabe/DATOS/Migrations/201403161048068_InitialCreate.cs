namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.InstaPictures",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        InstaId = c.String(),
                        Caption = c.String(),
                        Time = c.String(),
                        Lat = c.Double(nullable: false),
                        Lng = c.Double(nullable: false),
                        ImgLow = c.String(),
                        Likes = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.InstaPictures");
        }
    }
}
