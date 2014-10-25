namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InstaPictures", "Selected", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "Selected");
        }
    }
}
