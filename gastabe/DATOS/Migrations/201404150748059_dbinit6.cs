namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit6 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserLocations", "InstaPictureId", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserLocations", "InstaPictureId");
        }
    }
}
