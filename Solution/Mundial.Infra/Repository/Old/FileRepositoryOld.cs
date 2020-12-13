using System;
using System.Collections.Generic;
using Mundial.Infra.Model;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Mundial.Infra.Repository
{
    public class FileRepositoryOld
    {
        private readonly MundialContext _context;
        public FileRepositoryOld(MundialContext context)
        {
            _context = context;
        }

    //     public IEnumerable<File> GetAllFiles()
    //     {  
    //         try
    //         {                        
                                    
    //             var fileList = _context.Files
    //                                 .Where(x => x.Id > 0)
    //                                 .Include(x => x.CustomerAddress)
    //                                 .Include(x => x.WorkAddress)
    //                                 .ToList();
    //             return fileList;
    //         }
    //         catch(Exception e)
    //         {
    //             throw e;
    //         }
           
    //     }

    // public IEnumerable<File> GetAllValidFiles(int number)
    //     { 
    //         try
    //         {
    //             var fileList = _context.Files
    //                                 .Where( x => x.ExclusionDate == null)
    //                                 .Include(x => x.CustomerAddress)
    //                                 .Include(x => x.WorkAddress)
    //                                 .ToList(); 
    //             return fileList;
    //         }
    //         catch(Exception e)
    //         {   
    //             throw e;
    //         }
            
    //     }

    //     public IEnumerable<File> GetAllValidFilesByNumber(int number)
    //     { 
    //         try
    //         {
    //             var fileList = _context.Files
    //                                 .Where(x => x.Number == number && x.ExclusionDate == null)
    //                                 .Include(x => x.CustomerAddress)
    //                                 .Include(x => x.WorkAddress)
    //                                 .ToList(); 
    //             return fileList;
    //         }
    //         catch(Exception e)
    //         {   
    //             throw e;
    //         }
            
    //     }

    //     public IEnumerable<File> GetAllFilesByNumber(int number)
    //     { 
    //         try
    //         {
    //             var fileList = _context.Files
    //                                 .Where(x => x.Number == number)
    //                                 .Include(x => x.CustomerAddress)
    //                                 .Include(x => x.WorkAddress)
    //                                 .ToList(); 
    //             return fileList;
    //         }
    //         catch(Exception e)
    //         {   
    //             throw e;
    //         }
            
    //     }

    //     public IEnumerable<File> GetFileById(int id)
    //     { 
    //         try
    //         {
    //             var fileList = _context.Files
    //                                 .Where(x => x.Id == id)
    //                                 .Include(x => x.CustomerAddress)
    //                                 .Include(x => x.WorkAddress)
    //                                 .ToList(); 
    //             return fileList;
    //         }
    //         catch(Exception e)
    //         {   
    //             throw e;
    //         }
            
    //     }

    //     public IEnumerable<File> GetValidFileById(int id)
    //     { 
    //         try
    //         {
    //             var fileList = _context.Files
    //                                 .Where(x => x.Id == id && x.ExclusionDate == null)
    //                                 .Include(x => x.CustomerAddress)
    //                                 .Include(x => x.WorkAddress)
    //                                 .ToList(); 
    //             return fileList;
    //         }
    //         catch(Exception e)
    //         {   
    //             throw e;
    //         }
            
    //     }
        
    //     public bool PutFile(File item)
    //     {
    //         try
    //         {
    //             _context.Files.Add(item);
               
    //             var numberOfItens = _context.SaveChanges();
                
    //             return numberOfItens > 0 ? true : false;

    //         }
    //         catch(Exception e)
    //         {
    //             throw e;
    //         }
    //     }

    //     public bool UpdateFile(File newItem, int oldItemId)
    //     { 
    //         try
    //         {
    //             var itenToExclud = _context.Files
    //                                     .Where(x => x.Id == oldItemId)
    //                                     .Include(x => x.CustomerAddress)
    //                                     .Include(x => x.WorkAddress)                                        
    //                                     .Single();

    //             itenToExclud.ExclusionDate = DateTime.UtcNow;

    //             if(itenToExclud.CustomerAddress != null)
    //                 itenToExclud.CustomerAddress.ExclusionDate = DateTime.UtcNow;

    //             if(itenToExclud.WorkAddress != null)
    //                 itenToExclud.WorkAddress.ExclusionDate = DateTime.UtcNow;

    //              _context.Files.Add(newItem);
               
    //             var numberOfItens = _context.SaveChanges();
                
    //             return numberOfItens > 0 ? true : false;

    //         }
    //         catch(Exception e)
    //         {
    //             throw e;
    //         }              

    //     }

    //     public bool DeleteFile(int id)
    //     {
    //         try
    //         {
    //             var itenToExclud = _context.Files
    //                                     .Where(x => x.Id == id)
    //                                     .Include(x => x.CustomerAddress)
    //                                     .Include(x => x.WorkAddress)                                        
    //                                     .Single();

    //             itenToExclud.ExclusionDate = DateTime.UtcNow;

    //             if(itenToExclud.CustomerAddress != null)
    //                 itenToExclud.CustomerAddress.ExclusionDate = DateTime.UtcNow;

    //             if(itenToExclud.WorkAddress != null)
    //                 itenToExclud.WorkAddress.ExclusionDate = DateTime.UtcNow;
               
    //             var numberOfItens = _context.SaveChanges();
                
    //             return numberOfItens > 0 ? true : false;

    //         }
    //         catch(Exception e)
    //         {
    //             throw e;
    //         }
    //     }
    }
}
