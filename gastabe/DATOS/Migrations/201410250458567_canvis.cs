namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class canvis : DbMigration
    {
        public override void Up()
        {
            DropTable("dbo.ConsultasGeos");
            DropTable("dbo.DesStores");
            DropTable("dbo.InstaPictures");
            DropTable("dbo.UpdateInstaLogs");
        }
        
        public override void Down()
        {
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
                        Points = c.Int(nullable: false),
                        UserId = c.String(),
                        Followers = c.Int(nullable: false),
                        Comments = c.Int(nullable: false),
                        UserName = c.String(),
                        Link = c.String(),
                        Selected = c.Int(nullable: false),
                        User_profilepic = c.String(),
                        User_bio = c.String(),
                        TodayInsta = c.DateTime(),
                        insta_type = c.String(),
                        place_name = c.String(),
                        place_vicinity = c.String(),
                        localimg = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
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
                        Flagship = c.Boolean(nullable: false),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
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
    }
}
