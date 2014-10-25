namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit8 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.SubscriberPreferences", "UserId", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.SubscriberPreferences", "UserId", c => c.Int(nullable: false));
        }
    }
}
