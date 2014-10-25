using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace querygram
{

  
    public class Meta
    {
        public int code { get; set; }
    }

    public class UpdateFrequence
    {
        public string Frequence { get; set; }
        public int Value { get; set; }
    }

    public class Location
    {
        public double latitude { get; set; }
        public double longitude { get; set; }
        public string name { get; set; }
        public int? id { get; set; }
    }

    public class Comments
    {
        public int count { get; set; }
        public List<object> data { get; set; }
    }

    public class Datum2
    {
        public string username { get; set; }
        public string profile_picture { get; set; }
        public string id { get; set; }
        public string full_name { get; set; }
    }

    public class Likes
    {
        public int count { get; set; }
        public List<Datum2> data { get; set; }
    }

    public class LowResolution
    {
        public string url { get; set; }
        public int width { get; set; }
        public int height { get; set; }
    }

    public class Thumbnail
    {
        public string url { get; set; }
        public int width { get; set; }
        public int height { get; set; }
    }

    public class StandardResolution
    {
        public string url { get; set; }
        public int width { get; set; }
        public int height { get; set; }
    }

    public class Images
    {
        public LowResolution low_resolution { get; set; }
        public Thumbnail thumbnail { get; set; }
        public StandardResolution standard_resolution { get; set; }
    }

    public class From
    {
        public string username { get; set; }
        public string profile_picture { get; set; }
        public string id { get; set; }
        public string full_name { get; set; }
    }

    public class Caption
    {
        public string created_time { get; set; }
        public string text { get; set; }
        public From from { get; set; }
        public string id { get; set; }
    }

    public class User
    {
        public string username { get; set; }
        public string website { get; set; }
        public string profile_picture { get; set; }
        public string full_name { get; set; }
        public string bio { get; set; }
        public string id { get; set; }
    }

    public class Datum
    {
        public object attribution { get; set; }
        public List<string> tags { get; set; }
        public Location location { get; set; }
        public Comments comments { get; set; }
        public string filter { get; set; }
        public string created_time { get; set; }
        public string link { get; set; }
        public Likes likes { get; set; }
        public Images images { get; set; }
        public List<object> users_in_photo { get; set; }
        public Caption caption { get; set; }
        public string type { get; set; }
        public string id { get; set; }
        public User user { get; set; }
    }

    public class Counts
    {
        public int media { get; set; }
        public int follows { get; set; }
        public int followed_by { get; set; }
    }

    public class DataUser
    {
        public string id { get; set; }
        public string username { get; set; }
        public string full_name { get; set; }
        public string profile_picture { get; set; }
        public string bio { get; set; }
        public string website { get; set; }
        public Counts counts { get; set; }
    }

    public class DataFollower
    {
        public string username { get; set; }
        public string first_name { get; set; }
        public string profile_picture { get; set; }
        public string id { get; set; }
        public string last_name { get; set; }
    }

  

    public class DataMedia
    {
        public Comments comments { get; set; }
        public Caption caption { get; set; }
        public Likes likes { get; set; }
        public string link { get; set; }
        public User user { get; set; }
        public string created_time { get; set; }
        public Images images { get; set; }
        public string type { get; set; }
        public List<object> users_in_photo { get; set; }
        public string filter { get; set; }
        public List<string> tags { get; set; }
        public string id { get; set; }
        public Location location { get; set; }
        public object attribution { get; set; }
    }

    public class RootObjectInstaAT
    {
        public string access_token { get; set; }
        public User user { get; set; }
    }

    public class InstaATRequest
    {
        public string client_id { get; set; }
        public string client_secret { get; set; }
        public string grant_type { get; set; }
        public string redirect_url { get; set; }
        public string code { get; set; }
    }

    public class miniKPI
    {
        public int month { get; set; }
        public int year { get; set; }
        public int Value { get; set; }
    }

    public enum KPIType
    {
        location = 1,
        like = 2,
        request = 3,
        subscription = 4,
        web_clicks = 5,
        video_clicks = 6
    }

    public class Categories
    {
        public List<string> category { get; set; }
    }

    public class Store
    {
        public string name { get; set; }
        public string address { get; set; }
        public string address2 { get; set; }
        public string country { get; set; }
        public string provinceId { get; set; }
        public Categories categories { get; set; }
        public string email { get; set; }
        public string website { get; set; }
        public string lat { get; set; }
        public string lng { get; set; }
        public string phone { get; set; }
        public string store_id { get; set; }
        public string display_address { get; set; }
        public string country_name { get; set; }
        public string city_id { get; set; }
        public string flagship_store { get; set; }
        public string working_hours_close { get; set; }
        public string working_hours_open { get; set; }
        public string postal_code { get; set; }
        public string owner_store_type { get; set; }
        public string store_type { get; set; }
        public string opening_date { get; set; }
        public string permite_devolucion { get; set; }
        public string allows_delivery { get; set; }
        public bool open_on_sunday { get; set; }
        public string city { get; set; }
        public string opening_status { get; set; }
        public string overlay_image { get; set; }
    }

    public class RootObjectStore
    {
        public List<Store> store { get; set; }
    }


}
