namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class nearplaces : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InstaPictures", "place_name", c => c.String());
            AddColumn("dbo.InstaPictures", "place_vicinity", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "place_vicinity");
            DropColumn("dbo.InstaPictures", "place_name");
        }
    }
}
