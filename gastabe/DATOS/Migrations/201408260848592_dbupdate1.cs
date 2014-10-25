namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbupdate1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Subscribers", "Email", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Subscribers", "Email");
        }
    }
}
