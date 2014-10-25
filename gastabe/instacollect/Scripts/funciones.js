$(document).ready(init);

function init() {

    $(".btneliminar").bind("click", function () {
        ConfirmarBorrar({
                            href: this.href ,
                            source:this
                        }); 
        return false;
    });


    InitTinyMCE();

    if ($.ui && $.ui.dialog && $.ui.dialog.prototype._allowInteraction) {
        var ui_dialog_interaction = $.ui.dialog.prototype._allowInteraction;
        $.ui.dialog.prototype._allowInteraction = function (e) {
            if ($(e.target).closest('.select2-drop').length) return true;
            return ui_dialog_interaction.apply(this, arguments);
        };
    }  
}

function InitTinyMCE() {
    tinymce.init({
        selector: '.tinyclass',
        width: "70%",
        height: "13em",
        menubar: false,
        statusbar: false,
        plugins: ["lists link image charmap  preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table contextmenu paste textcolor emoticons"],
        toolbar1: "undo | redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview | forecolor backcolor emoticons",
    });
}

function ConfirmarBorrar(options) {
    options = options || {};
    options.href = options.href || "";
    
    options.title = TITULO_BORRAR || "Confirmar eliminación";
    options.text = MENSAJE_BORRAR || "¿Desea eliminar este elemento definitivamente?";
    options.source = options.source || null;
    if (options.href.length <= 0) return;

    $("#dialog:ui-dialog").dialog("destroy");
    $("#dialog").remove();


    try {
        var dialogdiv = $("<div id='dialog' title='" + options.title + "'></div>");
        var spandialogdiv = $("<p></p>");
        $(spandialogdiv).text(options.text);
        $(dialogdiv).append($(spandialogdiv));

        var diag = $(dialogdiv).dialog({
            resizable: false,
            height: "auto",
            modal: true,
            buttons: {
                "Sí": function () {
                    $(this).dialog("close");
                    $.post(options.href, '', function (data) {
                        if (options.source != null) {
                            if (data == "true") {
                                var elemento = $(options.source);
                                var tr = elemento.closest('tr');
                                if ($(tr).length > 0) {
                                    $(tr).fadeOut("fast", function () {
                                        $(this).remove();
                                        location.reload();
                                    });
                                } else {
                                    location.reload();
                                }
                            } 
                        } else {
                            location.reload();
                        }

                    }).fail(function (xhr, ajaxOptions, thrownError) {
                        msg(thrownError);
                    });
                },
                "No": function () {
                    $(this).dialog("close");
                }
            }
        }).dialog("open"); 
    }
    catch (err) {
        alert(err.message);
    }
    
  
    return false;
}

function msg(texto) {

    var contenedor = $("<div>").attr("title", "Error");
    var spanTexto = $("<p></p>");
    $(spanTexto).text(texto);
    $(contenedor).append($(spanTexto));
    $(contenedor).dialog({
        resizable: false,
        height: "auto",
        modal: true,
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }
    });
}

function msgHtml(titulo,textohtml, callbackOk, callbackCreated) {
    
    var contenedor = $("<div>").attr("title", titulo || "");
    $(contenedor).append($(textohtml));
    $(contenedor).dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        position: "center",
        modal: true,
        create: function () {
            $(this).dialog("option", "position", "center");
            if (callbackCreated && typeof (callbackCreated) === "function") {

                callbackCreated($(this));
            }

        },
        close: function() {
                if (callbackOk && typeof (callbackOk) === "function") {

                    callbackOk($(this));
                }
              },
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }
    });
}