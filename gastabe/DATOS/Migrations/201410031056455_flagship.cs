namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class flagship : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.DesStores", "Flagship", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.DesStores", "Flagship");
        }
    }
}
