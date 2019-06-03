using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using API.Model;

namespace API.Controllers
{
    [Route("api/maps")]
    [ApiController]
    public class MapsController : Controller
    {
        public MapContext _context { get; set; }
        public MapsController(MapContext c)
        {

            _context = c;

        }

        //een resounce lijst opvragen
        [HttpGet]
        public List<Map> GetMaps(string name, string location, int? page, string sort, int limit = 2, string dir = "asc")
        {
            IQueryable<Map> query = _context.Maps;
            if (!string.IsNullOrWhiteSpace(name))
                query = query.Where(m => m.mapname == name);
            if (!string.IsNullOrWhiteSpace(location))
                query = query.Where(l => l.location == location);

            if (!string.IsNullOrWhiteSpace(sort))
            {
                switch (sort)
                {
                    case "name":
                        if (dir == "asc")
                            query = query.OrderBy(m => m.mapname);
                        else if (dir == "desc")
                            query = query.OrderByDescending(m => m.mapname);
                        break;
                    case "order":
                        if (dir == "asc")
                            query = query.OrderBy(o => o.order);
                        else if (dir == "desc")
                            query = query.OrderByDescending(o => o.order);
                        break;
                }
            }

                if (page.HasValue)
                    query = query.Skip(page.Value * limit);
                query = query.Take(limit);


                return query.ToList();



            
        }

        //1 resource adhv id opvragen
        [Route("{id}")]
        [HttpGet]
        public ActionResult<Map> GetMaps(int id)
        {
            var map = _context.Maps.Find(id);
            if (map == null)
                return NotFound();

            return map;
        }

        //een resrouce aanpassen
        [HttpPut]
        public ActionResult<Map> MapUp([FromBody]Map maps)
        {
            _context.Maps.Update(maps);
            _context.SaveChanges();
            return Created("", maps);
        }

        //aanmaken van resource

        [HttpPost]
        public ActionResult<Map> MapAdd([FromBody]Map maps)
        {

            _context.Maps.Add(maps);
          
           

            _context.SaveChanges();
            return Created("", maps);
        }


        [Route("{id}")]
        [HttpDelete]
        public IActionResult DelMap(int id)
        {
            var map = _context.Maps.Find(id);
            if (map == null)
                return NotFound();

            _context.Maps.Remove(map);
            _context.SaveChanges();
            return NoContent();

        }

        //[HttpGet]
        //public List<Map> GetAllMaps(string name, string location, int? page, int length = 2)
        //{
        //    IQueryable<Map> query = _context.Maps;
        //    if (!string.IsNullOrWhiteSpace(name))
        //        query = query.Where(m => m.mapname == name);
        //    if (!string.IsNullOrWhiteSpace(location))
        //        query = query.Where(l => l.location == location);

        //    if (page.HasValue)
        //        query = query.Skip(page.Value * length);
        //    query = query.Take(length);


        //    return query.ToList();
        //}


        //    public async Task<IActionResult> Index(string sortOrder)
        //    {
        //        ViewData["NameSortParm"] = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
        //        ViewData["DateSortParm"] = sortOrder == "Date" ? "date_desc" : "Date";
        //        var students = from s in _context.Maps
        //                       select s;
        //        switch (sortOrder)
        //        {
        //            case "name_desc":
        //                students = students.OrderByDescending(s => s.mapname);
        //                break;
        //            case "Date":
        //                students = students.OrderBy(s => s.EnrollmentDate);
        //                break;
        //            case "date_desc":
        //                students = students.OrderByDescending(s => s.EnrollmentDate);
        //                break;
        //            default:
        //                students = students.OrderBy(s => s.LastName);
        //                break;
        //        }
        //        return View(await students.AsNoTracking().ToListAsync());
        //    }


        //    static BooksController()
        //    {
        //        list.Add(new Book()
        //        {
        //            Id = 1,
        //            Title = "The Hobbit",
        //            ISBN = "1234"
        //        });

        //        list.Add(new Book()
        //        {
        //            Id = 2,
        //            Title= "The Hobbit 2",
        //            ISBN = "234"
        //        });
        //    }

        //    [HttpGet]
        //    public List<Book> GetBooks()
        //    {
        //        return list;
        //    }


        //    [Route("{id}")]
        //    [HttpGet]
        //    public ActionResult<Book> GetBook(int id)
        //    {
        //        if (list.Exists(book => book.Id == id))
        //            return list.First(book => book.Id == id);
        //        else
        //            return NotFound();
        //    }



        //    [Route("{id}")]
        //    [HttpDelete]
        //    public IActionResult DeleteBook(int id)
        //    {
        //        if (list.Exists(book => book.Id == id))
        //        {
        //            var book = list.First(b => b.Id == id);
        //            list.Remove(book);
        //            return NoContent();
        //        }
        //        else
        //            return NotFound();
        //    }

        //    [HttpPost]
        //    public ActionResult<Book> AddBook([FromBody]Book book)
        //    {
        //        //ken er ID aan toe
        //        var max = list.Max(b => b.Id);
        //        book.Id = max + 1;
        //        list.Add(book);
        //        //return boek met ID
        //        return Created("", book);
        //    }
        //}
    }
}








