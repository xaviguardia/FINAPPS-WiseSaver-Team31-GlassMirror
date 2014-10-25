namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class dbinit5 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SubscriberPreferences",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        UserId = c.Int(nullable: false),
                        ReminderFrequence = c.Int(nullable: false),
                        ReminderDate = c.DateTime(nullable: false),
                        TimeZoneId = c.String(),
                        CreatedDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        CreatedBy = c.String(),
                        ModifiedBy = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.InstaPictures", "TodayInsta", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "TodayInsta");
            DropTable("dbo.SubscriberPreferences");
        }
    }
}
