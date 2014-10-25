using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using querygram.Common;
using System.Data.Entity.Migrations;
using DATOS.Migrations;

namespace querygram
{
    public class Model
    {

    }







    public class Contenedor : DbContext
    {
        public Contenedor()
            : base("name=ContenedorDB")
        {
            Debug.Write(Database.Connection.ConnectionString);
        }

        public DbSet<StoredCredentials> StoredCredentials { get; set; }
        public DbSet<Subscribers> Subscribers { get; set; }
        public DbSet<UserLocations> UserLocations { get; set; }
        public DbSet<RemindersUsers> RemindersUser { get; set; }
        public DbSet<EmailsLog> EmailsLog { get; set; }
        public DbSet<SubscriberPreference> SubscriberPreference { get; set; }
        public DbSet<KPI> KPI { get; set; }

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
