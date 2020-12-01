using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Mundial.Infra.Repository
{
    public abstract class BaseRepository <T> where T : MundialModel 
    {
        private readonly DbSet<T> _dbSet;
        private readonly MundialContext _context;
        public BaseRepository(MundialContext context)
        {
            _dbSet = context.Set<T>();
            _context = context;
        }

        public virtual IEnumerable<T> GetAll()
        {  
            try
            {                        
                                    
                var itens = _dbSet.Where(x => x.Id > 0)
                                    .ToList();
                return itens;
            }
            catch(Exception e)
            {
                throw e;
            }
           
        }

        public virtual IEnumerable<T> GetAllValidItens()
        { 
            try
            {
                var itens = _dbSet.Where( x => x.ExclusionDate == null)
                                    .ToList(); 
                return itens;
            }
            catch(Exception e)
            {   
                throw e;
            }
            
        }


        public virtual IEnumerable<T> GetItenById(int id)
        { 
            try
            {
                var itens = _dbSet.Where(x => x.Id == id)
                                    .ToList(); 
                return itens;
            }
            catch(Exception e)
            {   
                throw e;
            }
            
        }

        public virtual IEnumerable<T> GetValidItenById(int id)
        { 
            try
            {
                var itens = _dbSet.Where(x => x.Id == id && x.ExclusionDate == null)
                                    .ToList(); 
                return itens;
            }
            catch(Exception e)
            {   
                throw e;
            }
            
        }
        
        public virtual bool PutIten(T item)
        {
            try
            {
                _dbSet.Add(item);
               
                var numberOfItens = _context.SaveChanges();
                
                return numberOfItens > 0 ? true : false;

            }
            catch(Exception e)
            {
                throw e;
            }
        }

        public virtual bool UpdateIten(T newItem, int oldItemId)
        { 
            try
            {
                var itenToExclud = _dbSet.Where(x => x.Id == oldItemId)                                 
                                        .Single();

                itenToExclud.ExclusionDate = DateTime.UtcNow;


                 _dbSet.Add(newItem);
               
                var numberOfItens = _context.SaveChanges();
                
                return numberOfItens > 0 ? true : false;

            }
            catch(Exception e)
            {
                throw e;
            }              

        }

        public virtual bool DeleteIten(int id)
        {
            try
            {
                var itenToExclud = _dbSet.Where(x => x.Id == id)                                       
                                        .Single();

                itenToExclud.ExclusionDate = DateTime.UtcNow;
               
                var numberOfItens = _context.SaveChanges();
                
                return numberOfItens > 0 ? true : false;

            }
            catch(Exception e)
            {
                throw e;
            }
        }
    }
}
