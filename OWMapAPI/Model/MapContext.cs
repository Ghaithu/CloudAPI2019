using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class MapContext : DbContext
    {
        public MapContext(DbContextOptions<MapContext> options) 
                                    : base(options)
        {

        }
        public DbSet<Map> Maps { get; set; }
    }
}
