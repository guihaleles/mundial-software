using System.Collections.Generic;
using System.Linq;

namespace Mundial.Infra.Extensions
{
    public static class PagingExtensions
    {
            //used by LINQ to SQL
        public static IQueryable<TSource> Page<TSource>(this IQueryable<TSource> source, int page, int pageSize)
        {
            return source.Skip((page) * pageSize).Take(pageSize);
        }

        //used by LINQ
        public static IEnumerable<TSource> Page<TSource>(this IEnumerable<TSource> source, int page, int pageSize)
        {
            return source.Skip((page) * pageSize).Take(pageSize);
        }

    }
}
