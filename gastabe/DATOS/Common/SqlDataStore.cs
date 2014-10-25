using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Google.Apis.Util.Store;
using System.Threading;
using System.Threading.Tasks;
using System.Data.Entity;
using Newtonsoft.Json;

namespace querygram.Common
{
    public class SqlDataStore : IDataStore
    {
        public StoredCredentials _storedResponse { get; set; }


        public SqlDataStore(StoredCredentials pResponse)
        {
            this._storedResponse = pResponse;
        }
        public SqlDataStore()
        {
            this._storedResponse = new StoredCredentials();
        }
        public Task ClearAsync()
        {
            var db = new MirrorDBContext();
            foreach (var key in db.StoredCredentials.Select(e => e.Key))
            {
                var entity = new StoredCredentials { Key = key };
                db.StoredCredentials.Attach(entity);
                db.StoredCredentials.Remove(entity);
            }
            db.SaveChanges();

            return TaskEx.Delay(0);
        }


        public Task DeleteAsync<T>(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Key MUST have a value");
            }

            var db = new MirrorDBContext();
            string generatedKey = GenerateStoredKey(key, typeof(T));
            var item = db.StoredCredentials.FirstOrDefault(x => x.Key == generatedKey);
            if (item != null)
                db.StoredCredentials.Remove(item);
            db.SaveChanges();

            return TaskEx.Delay(0);
        }

        public Task<T> GetAsync<T>(string key)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Key MUST have a value");
            }

            var db = new MirrorDBContext();
            var generatedKey = GenerateStoredKey(key, typeof(T));
            var item = db.StoredCredentials.FirstOrDefault(x => x.Key == generatedKey);
            T value = item == null ? default(T) : JsonConvert.DeserializeObject<T>(item.Value);
            return Task.FromResult<T>(value);
        }

        public async Task StoreAsync<T>(string key, T value)
        {
            if (string.IsNullOrEmpty(key))
            {
                throw new ArgumentException("Key MUST have a value");
            }

            var db = new MirrorDBContext();
            var item = new StoredCredentials { Key = GenerateStoredKey(key, typeof(T)), Value = JsonConvert.SerializeObject(value) };
            db.StoredCredentials.Add(item);
            await db.SaveChangesAsync();
        }


        private static string GenerateStoredKey(string key, Type t)
        {
            return string.Format("{0}-{1}", t.FullName, key);
        }
    }
}