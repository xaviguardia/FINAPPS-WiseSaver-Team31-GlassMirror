using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using System.Text;
using System.Web.Mvc.Ajax;
using querygram.Common;

namespace instacollect.utils
{
    public static class Helper
    {

        public static MvcHtmlString HtmlActionLink(this AjaxHelper helper, string html, string actionName, string controllerName, object routeValues, AjaxOptions ajaxOptions)
        {
            var link = helper.ActionLink("[replace] ", actionName, controllerName, routeValues, ajaxOptions).ToHtmlString();
            return new MvcHtmlString(link.Replace("[replace]", html));
        }

        public class PagingInfo
        {
            public int TotalItems { get; set; }
            public int ItemsPerPage { get; set; }
            public int CurrentPage { get; set; }
            public int TotalPages { get { return (int)Math.Ceiling((decimal)TotalItems / ItemsPerPage); } }
        }

        public class PagingHtmlBuilder
        {
            public string buildHtmlItem(string url, string display, bool active = false, bool disabled = false)
            {
                // every item wrapped in LI tag
                TagBuilder liTag = new TagBuilder("li");
                if (disabled)
                {
                    // add disabled class and use a SPAN tag inside
                    liTag.MergeAttribute("class", "active");
                    TagBuilder tag = new TagBuilder("a");
                    tag.MergeAttribute("href", "#");
                    tag.InnerHtml = display;
                    liTag.InnerHtml = tag.ToString();
                    /*
                    var spanTag = new TagBuilder("span");
                    spanTag.InnerHtml = display;
                    liTag.InnerHtml = spanTag.ToString();
                     * */
                }
                else
                {
                    if (active)
                    {
                        liTag.MergeAttribute("class", "active");
                    }
                    // use inner A tag
                    TagBuilder tag = new TagBuilder("a");
                    tag.MergeAttribute("href", url);
                    tag.InnerHtml = display;
                    liTag.InnerHtml = tag.ToString();
                }
                return liTag.ToString();
            }
        }

            public static MvcHtmlString PageLinks(
            this HtmlHelper html,
            PagingInfo pagingInfo,
            Func<int, string> pageUrl
            )
            {
                var pagingBuilder = new PagingHtmlBuilder();
                StringBuilder result = new StringBuilder();

                // first link
                string firstLink = (pagingInfo.CurrentPage == 1)
                ? pagingBuilder.buildHtmlItem(pageUrl(1), "First", true)
                : pagingBuilder.buildHtmlItem(pageUrl(1), "First");
                result.Append(firstLink);
                //previous link
                string prevLink = (pagingInfo.CurrentPage == 1)
                ? pagingBuilder.buildHtmlItem(pageUrl(pagingInfo.CurrentPage - 1), "Prev", false, true)
                : pagingBuilder.buildHtmlItem(pageUrl(pagingInfo.CurrentPage - 1), "Prev");
                result.Append(prevLink);

                // only show up to 5 links to the left of the current page
                var start = (pagingInfo.CurrentPage <= 6) ? 1 : (pagingInfo.CurrentPage - 5);
                // only show up to 5 links to the right of the current page
                var end = (pagingInfo.CurrentPage > (pagingInfo.TotalPages - 5)) ? pagingInfo.TotalPages : pagingInfo.CurrentPage + 5;

                for (int i = start; i <= end; i++)
                {
                    string pageHtml;
                    pageHtml = (i == pagingInfo.CurrentPage)
                    ? pagingBuilder.buildHtmlItem(pageUrl(i), i.ToString(), true)
                    : pagingBuilder.buildHtmlItem(pageUrl(i), i.ToString());
                    result.Append(pageHtml);
                }

                // next link
                string nextLink = (pagingInfo.CurrentPage == pagingInfo.TotalPages)
                ? pagingBuilder.buildHtmlItem(pageUrl(pagingInfo.CurrentPage + 1), "Next", false, true)
                : pagingBuilder.buildHtmlItem(pageUrl(pagingInfo.CurrentPage + 1), "Next");
                result.Append(nextLink);

                // last link
                string lastLink = (pagingInfo.CurrentPage == pagingInfo.TotalPages)
                ? pagingBuilder.buildHtmlItem(pageUrl(pagingInfo.TotalPages), "Last", true)
                : pagingBuilder.buildHtmlItem(pageUrl(pagingInfo.TotalPages), "Last");
                result.Append(lastLink);

                string total = pagingBuilder.buildHtmlItem("#", String.Format("{0} results",pagingInfo.TotalItems), false, true);
                result.Append(total);

                return MvcHtmlString.Create(result.ToString());
            }

            public class GrowlMessage
            {
                public String msg { get; set; }
                public String type { get; set; }
                public String positionHorizontal { get; set; }
                public String positionVertical { get; set; }
                public String delay { get; set; }
            }

            public class PagedList<T> where T : BaseEntity
            {
                public String lastsearch { get; set; }
                public int currentpage { get; set; }
                public String sortname { get; set; }
                public String sortorder { get; set; }
                public int totalrecords { get; set; }
                public bool HasNext { get; set; }
                public bool HasPrevious { get; set; }
                public List<T> Entities { get; set; }
            }

        public static MvcHtmlString Paging(this HtmlHelper html, int currentpage, int totalRecords,  int currentPageSize = 5, int registrosporpagina=15)
        {

            StringBuilder sb1 = new StringBuilder();

            sb1.AppendLine("<ul>");
            int seed = currentpage % currentPageSize == 0 ? currentpage : currentpage - (currentpage % currentPageSize);

            if (currentpage > 1)
                sb1.AppendLine(String.Format("<li><a data-page='{0}' href='#'>«</a></li>",  currentpage- 1));

            if (currentpage - currentPageSize >= 1)
                sb1.AppendLine(String.Format("<li><a data-page='{0}' href='#'>...</a></li>",  (currentpage - currentPageSize) + 1));

            for (int i = seed; i < Math.Ceiling((double)totalRecords / registrosporpagina) && i < seed + currentPageSize; i++)
            {
                string htmlclass = "";
                if (i == currentpage - 1)
                {
                    htmlclass = "active";
                    sb1.AppendLine(String.Format("<li class=" + htmlclass + "><a data-page='{0}' href='#'>{0}</a></li>", i + 1));
                }
                else
                {
                    sb1.AppendLine(String.Format("<li class=" + htmlclass + "><a data-page='{0}' href='#'>{0}</a></li>", i + 1));
                }

            }

            if (currentpage + currentPageSize <= Math.Ceiling((double)totalRecords / registrosporpagina))
                sb1.AppendLine(String.Format("<li><a data-page='{0}' href='#'>...</a></li>", (currentpage + currentPageSize)));

            if (currentpage < Math.Ceiling((double)totalRecords / registrosporpagina))
                sb1.AppendLine(String.Format("<li><a data-page='{0}' href='#'>»</a></li>", currentpage + 1));

            sb1.AppendLine("</ul>");

            return new MvcHtmlString(sb1.ToString());
        }
    }
   
}