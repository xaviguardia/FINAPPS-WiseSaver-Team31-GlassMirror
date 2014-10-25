namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit10 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InstaPictures", "User_profilepic", c => c.String());
            AddColumn("dbo.InstaPictures", "User_bio", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "User_bio");
            DropColumn("dbo.InstaPictures", "User_profilepic");
        }
    }
}
