using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace querygram.Common
{
    public abstract class BaseEntity 
    {
        public BaseEntity()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public String CreatedBy { get; set; }
        public String ModifiedBy { get; set; }

    }
}