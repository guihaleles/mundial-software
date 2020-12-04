using System;
using System.Collections.Generic;
using System.Linq;
using Mundial.Infra.Extensions;

namespace Mundial.Infra.Model
{
    public class Pagination<T> where T: MundialModel
    {
        public IEnumerable<T> Response {get; set;} 
        public int PageIndex {get; set;}
        public int PageSize {get; set;}
        public string OrderBy {get; set;}
        public int? Length {get ; set; }

        public Pagination(int pageIndex, int pageSize, string orderBy)
        {
            PageIndex = pageIndex;
            PageSize = pageSize;
            OrderBy = orderBy;
        }

        public void PaginationResult(IQueryable<T> query)
        {
            var response = PagingExtensions.Page<T>(query, PageIndex,
                                                     PageSize).ToList();
            
            var length = query.Count();
            
            Response = response;
            Length = length;           
        }
    }
}
