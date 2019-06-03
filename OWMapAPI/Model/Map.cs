using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Model
{
    public class Map
    {
        public int id { get; set; }
        public string mapname{ get; set; }
        public string description { get; set; }
        public string location { get; set; }
        public int order {get; set;}
    }
}
