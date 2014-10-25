namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class puntos : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InstaPictures", "Points", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "Points");
        }
    }
}
