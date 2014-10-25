using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using System.Diagnostics;
using System.Threading;
using System.Net;
using SoundInTheory.DynamicImage.Fluent;
using querygram;

namespace Services
{
    public class Utils
    {
        public static string TextSelection = "Tu foto ha sido elegida para la #LaVidaEsChula de Desigual";
        public static string clientId = "499598070210-4gudglmppg3h1gkm48ejr1pvcilrjggg.apps.googleusercontent.comm";
        public static string clientSecret = "kslJht8K-G3rKT6DyJW0Hmg7";
        private static Random rnd = new Random();
        public static string filePath = "C:\\inetpub\\wwwroot\\finapps\\temp\\";
        public static string urlPath = "http://www.vidaeschula.com/temp/";

        public static string UrlEncodeForGoogle(string url)
        {
            string UnReservedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.~";
            var result = new StringBuilder();

            foreach (char symbol in url)
            {
                if (UnReservedChars.IndexOf(symbol) != -1)
                {
                    result.Append(symbol);
                }
                else
                {
                    result.Append('%' + String.Format("{0:X2}", (int)symbol));
                }
            }

            return result.ToString();
        }
    }
    public static class stUtils
    {
        public static string ToPrettyFormat(TimeSpan span)
        {

            if (span == TimeSpan.Zero) return "0 minutes";

            var sb = new StringBuilder();
            if (span.Days > 0)
                sb.AppendFormat("{0} day{1} ", span.Days, span.Days > 1 ? "s" : String.Empty);
            if (span.Hours > 0)
                sb.AppendFormat("{0} hour{1} ", span.Hours, span.Hours > 1 ? "s" : String.Empty);
            if (span.Minutes > 0)
                sb.AppendFormat("{0} minute{1} ", span.Minutes, span.Minutes > 1 ? "s" : String.Empty);
            return sb.ToString();

        }
    }
}
