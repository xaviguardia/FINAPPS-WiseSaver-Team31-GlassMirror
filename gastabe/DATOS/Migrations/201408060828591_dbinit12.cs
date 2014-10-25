namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit12 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InstaPictures", "insta_type", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "insta_type");
        }
    }
}
