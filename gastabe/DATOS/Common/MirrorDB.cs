using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using DATOS.Migrations;

namespace querygram.Common
{
    public class MirrorDBContext : DbContext
    {
        public DbSet<StoredCredentials> StoredCredentials { get; set; }
        public DbSet<Subscribers> Subscribers { get; set; }
        public DbSet<SubscriberPreference> SubscriberPreference { get; set; }
     

        public void updateDatabase()
        {
            DbMigrator dbMigrator = new DbMigrator(new Configuration());
            try
            {
                dbMigrator.Update();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            dbMigrator.GetPendingMigrations();
        }

    }

  
}