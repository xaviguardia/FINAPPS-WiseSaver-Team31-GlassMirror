namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.StoredCredentials",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Key = c.String(),
                        Value = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Subscribers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Active = c.Boolean(nullable: false),
                        SubscriptionDate = c.DateTime(),
                        UnSubscriptionDate = c.DateTime(),
                        AccessToken = c.String(),
                        RefreshToken = c.String(),
                        Scope = c.String(),
                        TokenType = c.String(),
                        ExpirationToken = c.DateTime(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserLocations",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(),
                        Lat = c.Double(nullable: false),
                        Lng = c.Double(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.InstaPictures", "UserId", c => c.String());
            AddColumn("dbo.InstaPictures", "Followers", c => c.Int(nullable: false));
            AddColumn("dbo.InstaPictures", "UserName", c => c.String());
            AddColumn("dbo.InstaPictures", "Link", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "Link");
            DropColumn("dbo.InstaPictures", "UserName");
            DropColumn("dbo.InstaPictures", "Followers");
            DropColumn("dbo.InstaPictures", "UserId");
            DropTable("dbo.UserLocations");
            DropTable("dbo.Subscribers");
            DropTable("dbo.StoredCredentials");
        }
    }
}
