namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Subscribers", "ExpireIn", c => c.Long());
            AddColumn("dbo.Subscribers", "Issued", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Subscribers", "Issued");
            DropColumn("dbo.Subscribers", "ExpireIn");
        }
    }
}
