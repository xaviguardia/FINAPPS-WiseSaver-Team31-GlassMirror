using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using querygram.Common;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace querygram
{
    public class GoogleTokenData
    {
        public string Access_Token { get; set; }
        public int Expires_In { get; set; }
        public string Token_Type { get; set; }
    }
    
    public class StoredCredentials : BaseEntity
    {
        public StoredCredentials()
        {
            CreatedDate = DateTime.Now;
        }
        public string Key { get; set; }

        public string Value { get; set; }
    }

    
    public class UserLocations : BaseEntity
    {
        public string UserId { get; set; }
        public double Lat { get; set; }
        public double Lng { get; set; }
        public string InstaPictureId { get; set; }
    }

    public class Subscribers : BaseEntity
    {
        public bool Active { get; set; }
        public DateTime? SubscriptionDate { get; set; }
        public DateTime? UnSubscriptionDate { get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string Scope { get; set; }
        public string TokenType { get; set; }
        public long? ExpireIn { get; set; }
        public DateTime? Issued { get; set; }
        public DateTime? ExpirationToken { get; set; }
        public string Email { get; set; }
    }

    public class SubscriberPreference : BaseEntity
    {
        public string UserId { get; set; }
        public int ReminderFrequence { get; set; }
        public DateTime ReminderDate { get; set; }
        public string TimeZoneId { get; set; }

        public SubscriberPreference()
        {
            ReminderDate = new DateTime(1900,1,1);
        }

    }

    public class KPI : BaseEntity
    {
        public int type { get; set; }
        public int value { get; set; }
        public string desc { get; set; }
        public string UserId { get; set; }
    }

}
