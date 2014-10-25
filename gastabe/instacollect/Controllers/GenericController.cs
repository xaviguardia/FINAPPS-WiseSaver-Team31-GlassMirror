using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using querygram;
using instacollect.utils;
using Services;
using System.Web.UI.WebControls;
using System.Threading;
using System.Text.RegularExpressions;
using querygram.Common;


namespace instacollect.Admin.Controllers
{
    public class GenericController<TEntity> : Controller where TEntity : BaseEntity, new()
    {
        protected Repository<TEntity> repository = new Repository<TEntity>();

        protected string CREATE_REDIRECT = "Index";
        protected string EDIT_REDIRECT = "Index";
        protected string DELETE_REDIRECT = "Index";
        
        protected string DEFAULT_ORDEN= "Id";
        protected string DEFAULT_TIPO_ORDEN = "asc";

        protected int REGISTROS_POR_PAGINA= 15;

        [Authorize]
        public virtual ActionResult Index()
        {
            SelectListItem aa = new SelectListItem();
            Helper.PagedList<TEntity> resultado = null;
            if (TempData["Datos"] == null)
                resultado = getDatosOrdenadosFiltrados();
            else
                resultado = ( Helper.PagedList<TEntity> )TempData["Datos"] ;

            ViewBag.HasPrevious = resultado.HasPrevious ;
            ViewBag.HasMore = resultado.HasNext;
            ViewBag.CurrentPage = resultado.currentpage;
            ViewBag.SortName = resultado.sortname;
            ViewBag.SortOrder = resultado.sortorder;
            ViewBag.TotalRecords= resultado.totalrecords;
            ViewBag.LastSearch = resultado.lastsearch;

            Helper.GrowlMessage newMsg = new Helper.GrowlMessage();
            newMsg.msg="Lista Actualizada.";
            newMsg.type="info";
            newMsg.delay="500";
            AddGrowlMessage(newMsg);

            PreparaViewBag();
            return View(resultado.Entities);
        }

        [Authorize]
        [HttpPost]
        public virtual ActionResult Index(int? page = null, string sortname = null, string sortorder = null, string searchfor = null, string[] searchincols = null)
        {

            Helper.PagedList<TEntity> resultado = getDatosOrdenadosFiltrados(page, sortname, sortorder, searchfor, searchincols);

            TempData["Datos"] = resultado;
            PreparaViewBag();
            return  RedirectToAction("Index");
        }


        

        [Authorize]
        public virtual ActionResult Create(bool auto=false)
        {
            TEntity newentity = new TEntity();
           
            PreparaViewBag();
            return View(newentity);
        }

        [HttpPost]
        [Authorize]
        public virtual ActionResult Create(TEntity entidad)
        {
            if (ModelState.IsValid)
            {
                
                if (SaveUpdateEntity(entidad))
                {


                    Helper.GrowlMessage newMsg = new Helper.GrowlMessage();
                    newMsg.msg="Registro Creado Correctamente.";
                    newMsg.type="success";
                    AddGrowlMessage(newMsg);
                    return RedirectToAction(CREATE_REDIRECT);
                }
            }
            Helper.GrowlMessage newMsgErr = new Helper.GrowlMessage();
            newMsgErr.msg = "Ha habido errores creando el registro, revise los valores introducidos.";
            newMsgErr.type = "error";
            AddGrowlMessage(newMsgErr);

            PreparaViewBag();
            return View(entidad);
        }

        [Authorize]
        public virtual ActionResult Edit(string id)
        {
            PreparaViewBag();
            TEntity entidad = repository.Find(id);
            return View(entidad);
        }

        [HttpPost]
        [Authorize]
        public virtual ActionResult Edit(TEntity entidad)
        {


            TEntity referencia = new TEntity();
            referencia = repository.Find(entidad.Id);
            TryUpdateModel(referencia);

            if (ModelState.IsValid)
            {
                if (SaveUpdateEntity(referencia))
                {
                    Helper.GrowlMessage newMsg = new Helper.GrowlMessage();
                    newMsg.msg = "Registro Editado Correctamente.";
                    newMsg.type = "success";
                    AddGrowlMessage(newMsg);
                    return RedirectToAction(EDIT_REDIRECT);
                }
            }

            Helper.GrowlMessage newMsgErr = new Helper.GrowlMessage();
            newMsgErr.msg = "Ha habido errores editando el registro, revise los valores introducidos.";
            newMsgErr.type = "error";
            AddGrowlMessage(newMsgErr);


            PreparaViewBag();
            return View(referencia);
        }

        [Authorize]
        [HttpPost, ActionName("Delete")]
        public virtual ActionResult DeleteConfirmed(string id)
        {
            TEntity entidad = repository.Find(id);
            if (entidad != null)
            {
                if (WillDelete(entidad))
                {
                    repository.Delete(id);
                    repository.Save();
                    DidDeleted(entidad);
                    Helper.GrowlMessage newMsg = new Helper.GrowlMessage();
                    newMsg.msg = "Registro Eliminado Correctamente.";
                    newMsg.type = "success";
                    AddGrowlMessage(newMsg); ;
                    if (!Request.IsAjaxRequest()) return RedirectToAction(DELETE_REDIRECT);
                    else return Content("true");
                }
            }
           Helper.GrowlMessage newMsgErr = new Helper.GrowlMessage();
            newMsgErr.msg = "No se ha podido eliminar el registro.";
            newMsgErr.type = "error";
            AddGrowlMessage(newMsgErr);

            return Content("false");
        }

        protected virtual bool SaveUpdateEntity(TEntity entidad)
        {
            if (WillUpdateOrInsert(entidad))
            {
                repository.InsertOrUpdate(entidad);
                if (DidUpdatedOrInserted(entidad))
                {
                    if (WillSave(entidad))
                    {
                        repository.Save();
                        DidSaved(entidad);
                        return true;
                    }
                }
                
            }
            return false;
        }

        protected virtual bool WillDelete(TEntity entidad)
        {
            return true;
        }

        protected virtual void DidDeleted(TEntity entidad)
        {

        }

        protected virtual bool WillSave(TEntity entidad)
        {
            return true;
        }

        protected virtual void DidSaved(TEntity entidad)
        {

        }

        protected virtual bool WillUpdateOrInsert(TEntity entidad)
        {
            return true;
        }

        protected virtual bool DidUpdatedOrInserted(TEntity entidad)
        {
            return true;
        }

        protected virtual void PreparaViewBag()
        {
            ViewBag.GrowlMessages = TempData["GrowlMessages"];
        }

     


        /// - FIN ACTIONS
        /// 
        protected Helper.PagedList<TEntity> getDatosOrdenadosFiltrados(int? page = null, string sortname = null, string sortorder = null, string strsearch = null, string[] searchincols = null, int registrosPagina = 0)
        {
            int pagina = (page ?? 1); 
            List<TEntity> listaEntidades = repository.All.ToList();
            // busqeuda
            if (!string.IsNullOrEmpty(strsearch) && searchincols != null)
            {
                if (searchincols.Length > 0 && listaEntidades.Count>0)
                {
                    Type t = listaEntidades[0].GetType();

                    var listaProperties = t.GetProperties()
                               .Where(x => searchincols.Contains(x.Name))
                               .ToArray();

                    listaEntidades = (from e in listaEntidades
                                      from property in listaProperties
                                      let value = property.GetValue(e, null) as string
                                      where value.ToLower().Contains(strsearch.ToLower())
                                      select e).Distinct().ToList();
                }
            }
            
            if (string.IsNullOrEmpty(sortorder) && !string.IsNullOrEmpty(DEFAULT_TIPO_ORDEN))
            {
                sortorder = DEFAULT_TIPO_ORDEN;
            }
            if (string.IsNullOrEmpty(sortname) && !string.IsNullOrEmpty(DEFAULT_ORDEN))
            {
                sortname = DEFAULT_ORDEN;
            }

            if (!string.IsNullOrEmpty(sortname) && listaEntidades != null && listaEntidades.Count > 0 )
            {
                Type t = listaEntidades[0].GetType();
                var pi = t.GetProperty(sortname);

                if (sortorder == "asc")
                {
                    listaEntidades = listaEntidades.OrderBy(x => pi.GetValue(x, null)).ToList();
                }
                else
                {
                    listaEntidades = listaEntidades.OrderByDescending(x => pi.GetValue(x, null)).ToList();
                }
            }

            if (registrosPagina == 0) registrosPagina = REGISTROS_POR_PAGINA;

            int skiprecords = (pagina - 1) * registrosPagina;
            Helper.PagedList<TEntity> resultado = GetListaPaginada(listaEntidades, skiprecords, registrosPagina);

            resultado.currentpage = (page ?? 1);
            resultado.sortname = sortname;
            resultado.sortorder = sortorder;
            resultado.lastsearch = strsearch;
            return resultado;

        }

        private Helper.PagedList<TEntity> GetListaPaginada(List<TEntity> lista, int skip, int take)
        {

            var entityCount = lista.Count();
            List<TEntity> datos = lista.Skip(skip).Take(take).ToList();

            return new Helper.PagedList<TEntity>
            {
                Entities = datos,
                HasNext = (skip + take < entityCount),
                totalrecords = entityCount,
                HasPrevious = (skip > 0)
            };
        }

        private void AddGrowlMessage(Helper.GrowlMessage gmsg)
        {
            List<Helper.GrowlMessage> gmessages = (List<Helper.GrowlMessage>)(TempData["GrowlMessages"] ?? new List<Helper.GrowlMessage>());
            gmessages.Add(gmsg);
            TempData["GrowlMessages"] = gmessages;
        }
    
    }
}
