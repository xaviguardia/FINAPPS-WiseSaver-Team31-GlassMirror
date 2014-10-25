using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace querygram.Common
{
    public class Repository<TEntity> where TEntity : BaseEntity
    {
        internal MirrorDBContext context;
        internal DbSet<TEntity> dbSet;

        public Repository(MirrorDBContext ctx = null)
        {
            if (ctx == null)
                context = new MirrorDBContext();
            else
                context = ctx;
            this.dbSet = context.Set<TEntity>();
        }

        public MirrorDBContext GetContext()
        {
            return context;
        }

        public IQueryable<TEntity> All
        {
            get { return dbSet; }
        }

        public TEntity Find(string id)
        {
            return dbSet.SingleOrDefault(x => x.Id.Equals(id));
        }

        private bool Exists(TEntity entity)
        {
            return dbSet.Any(e => e.Id.Equals(entity.Id));
        }

        public void Delete(string id)
        {
            TEntity o = dbSet.SingleOrDefault(x => x.Id.Equals(id));
            dbSet.Remove(o);
        }

        public void Delete(TEntity o)
        {
            dbSet.Remove(o);
        }

        public void InsertOrUpdate(TEntity entity)
        {
            EntityState state = context.Entry(entity).State;
            // if (entity.Id == default(Guid))
            if (!Exists(entity))
            {
                // New entity
                entity.CreatedDate = DateTime.Now;
                entity.CreatedBy = "Auto";
                try
                {
                    entity.CreatedBy = "auto";
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }
                dbSet.Add(entity);
            }
            else
            {
                // Existing entity
                entity.ModifiedDate = DateTime.Now;
                entity.ModifiedBy = "Auto";

                try
                {
                    entity.ModifiedBy = "auto";
                }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                dbSet.Attach(entity);
                context.Entry(entity).State = EntityState.Modified;
            }
        }

        public void Save()
        {
            context.SaveChanges();
        }
    }
}