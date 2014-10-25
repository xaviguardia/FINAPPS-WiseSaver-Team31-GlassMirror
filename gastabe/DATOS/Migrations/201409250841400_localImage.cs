namespace DATOS.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class localImage : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.InstaPictures", "localimg", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.InstaPictures", "localimg");
        }
    }
}
