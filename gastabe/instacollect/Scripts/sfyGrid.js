if (typeof jQuery != 'undefined') {
    (function ($) {
        $.fn.sfyGrid = function (options) {
            options = options || {};

            options.ordenable = options.ordenable || false;
            options.urlcambiarorden = options.urlcambiarorden || "";
            options.activesortorder = options.activesortorder || "";
            options.activesortname = options.activesortname || "";

            options.searchable = options.searchable || false;
            options.urlsearch = options.urlsearch || "";
            options.lastSearch = options.lastSearch || "";

            options.paginable = options.paginable || false;
            options.urlpaginar = options.urlpaginar || "";
            options.currentpage = options.currentpage || 1;
            options.selectorlinkspaginas = options.selectorlinkspaginas || "";

            options.filasreordenables = options.filasreordenables || false;
            options.urlreordenarfilas = options.urlreordenarfilas || "";

            return this.each(function () {

                // orden de columnas
                if (options.ordenable) {
                    createOrdenable($(this));
                }

                //busqueda
                if (options.searchable) {
                    createSearchable($(this));
                }

                //paginacion
                if (options.paginable) {
                    createPaginable($(this));
                }

                // filas reordenables
                if (options.filasreordenables) {
                    createReordenable($(this));
                }
            });

            function createOrdenable(Elemento) {

                var urlCambiaOrden = options.urlcambiarorden;

                if (urlCambiaOrden.length == 0) return;

                var activesortorder = options.activesortorder;
                var activesortname = options.activesortname;

                $(Elemento).find(".colorden").each(function () {

                    if ($(this).attr("data-fieldname") == undefined) return;


                    var campo = $(this).attr("data-fieldname");
                    var icono = null;

                    if (campo == activesortname) {
                        if ("asc" == activesortorder) {
                            icono = $('<i class="icon icon-chevron-up"></i>');
                        } else {
                            icono = $('<i class="icon icon-chevron-down"></i>');
                        }
                    } else {
                        icono = $('<i class="icon icon-chevron-up"></i>');
                        $(icono).css('opacity', 0.2)
                    }

                    $(icono).css('cursor', 'pointer');

                    $(icono).click(function () {
                        var sorttype = "asc";
                        if ("asc" == activesortorder && campo == activesortname) {
                            sorttype = "desc";
                        }

                        createForm($(Elemento), urlCambiaOrden, campo, sorttype, options.lastSearch, 1)
                                    .submit();

                    });

                    $(this).append(icono);
                });
            }

            function createSearchable(Elemento) {
                $(Elemento).each(function () {
                    var urlBuscar = options.urlsearch;

                    if (urlBuscar == undefined || urlBuscar.length == 0) return;

                    var lastsearch = options.lastSearch;
                    var inputsearch = $('<input class="input-large searchtext " placeholder="Buscar..." type="text"/>');
                    var iconsearch = $('<i class="icon-search"></i>');
                    var icondelete = $('<i class="icon-remove"></i>');
                    $(inputsearch).val(lastsearch);
                    $(this).before(inputsearch);
                    $(this).before(iconsearch);

                    if (lastsearch.length > 0) {
                        $(this).before(icondelete);
                    }
                    $(iconsearch).css('cursor', 'pointer');
                    $(icondelete).css('cursor', 'pointer');


                    $(inputsearch).keypress(function(event) {
                        if (event.keyCode == 13) {
                            createForm($(Elemento), urlBuscar, options.activesortname, options.activesortorder, $(this).val(), 1)
                                    .submit();
                        }
                    });
                    
                    $(iconsearch).bind("click", function () {

                        var searchstring = $(inputsearch).val();
                        createForm($(Elemento), urlBuscar, options.activesortname, options.activesortorder, searchstring, 1)
                                    .submit();

                    });

                    $(icondelete).bind("click", function () {

                        var searchstring = "";
                        createForm($(Elemento), urlBuscar, options.activesortname, options.activesortorder, searchstring, 1)
                                    .submit();

                    });
                });
            }


            function createPaginable(Elemento) {
                var urlPaginar = options.urlpaginar;

                var selectorLinksPaginas = options.selectorlinkspaginas;
                if (urlPaginar == undefined || urlPaginar.length == 0) return;

                if (selectorLinksPaginas == undefined || selectorLinksPaginas.length == 0) return;

                $(selectorLinksPaginas).each(function () {
                    $(this).bind("click", function () {
                        var page = $(this).attr("data-page") || 1;
                        createForm($(Elemento), urlPaginar, options.activesortname, options.activesortorder, options.lastSearch, page)
                                    .submit();
                        return false;
                    });
                });
            }

            function createReordenable(Elemento) {
                var xhr = null;
                $(Elemento).sortable({
                    opacity: 0.6,
                    cursor: 'move',
                    items: 'tbody >tr',
                    update: function (event, ui) {

                        var descending = false;
                        if ($(this).attr("data-Descending") !== undefined)
                            var descending = true;

                        var temporden = 1;
                        var data = new Array();
                        var TotElements = $(this).find("*").find("input[type='hidden']").length;

                        if (descending) temporden = TotElements;
                        $(this).find("*")
                        .find("input[type='hidden']").each(function () {
                            _id = $(this).val();
                            Texto = $(this).parent().find("text").text();
                            data.push({ "Id": _id, "Orden": temporden, "Texto": Texto });
                            if (descending)
                                temporden -= 1;
                            else
                                temporden += 1;
                        });

                        if (xhr != null)
                            xhr.abort();


                        xhr = $.ajax(
                    {
                        type: "POST",
                        url: options.urlreordenarfilas,
                        dataType: 'json',
                        async: true,
                        data: JSON.stringify(data),
                        contentType: "application/json; charset=utf-8",
                        success: function () {
                        }
                    });
                    }
                });
            }

            function createForm(Element, url, sortname, sortorder, searchstring, numpage) {

                var form = $("<form  action='" + url + "' method='post'></form>");
                var hidden1 = $("<input name='sortname' type='hidden' value='" + sortname + "'/>");
                var hidden2 = $("<input name='sortorder' type='hidden' value='" + sortorder + "'/>");
                var hidden3 = $("<input name='searchfor' type='hidden' value='" + searchstring + "'/>");
                var hidden4 = $("<input name='page' type='hidden' value='" + numpage + "'/>");

                var aCols = new Array();
                var i = 0;
                $(Element).find(".colsearch").each(function () {
                    var field = $(this).attr("data-fieldname");
                    var hiddenCol = $("<input name='searchincols[" + i + "]' type='hidden' value='" + field + "'/>");
                    $(form).append(hiddenCol);
                    i++;
                });

                $(form).append(hidden1);
                $(form).append(hidden2);
                $(form).append(hidden3);
                $(form).append(hidden4);

                $("body").append(form);

                return $(form);
            }
        }
    })(jQuery);
}