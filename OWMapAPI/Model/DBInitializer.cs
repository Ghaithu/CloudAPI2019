using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class DBInitializer
    {
        public static void Initialize(MapContext context)
        {
            //Create the db if not yet exists
            context.Database.EnsureCreated();

            //Are there already books present ?
            if (!context.Maps.Any())
            {
                var map = new Map()
                {
                    mapname = "Anubis",
                    description = "Anubis is a deserty map situated in Egypt, it's a 2 capture points type map.",
                    location= "Egypt",
                    order = 1
                };

                var map2 = new Map()
                {
                    mapname = "Watch Point Gibraltar",
                    description = "Anubis is a deserty map situated in Egypt, it's a 2 capture points type map.",
                    location = "Spain",
                    order = 2
                };

                var map3 = new Map()
                {
                    mapname = "Watch Point Gibraltar",
                    description = "Anubis is a deserty map situated in Egypt, it's a 2 capture points type map.",
                    location = "Spain",
                    order = 66
                };

                context.Maps.Add(map);
                context.Maps.Add(map2);
                context.Maps.Add(map3);

                context.SaveChanges();
            }
        }
    }
}
