using SSBOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSDAL
{
    public interface IHISCustomerProductMappingDb
    {
        IQueryable<HISCustomerProductMapping> GetAll();
        IQueryable<HISCustomerProductMapping> GetById(int id);
        Task<bool> Create(HISCustomerProductMapping model);
        Task<bool> Update(HISCustomerProductMapping model);
        Task<bool> Delete(int id);
    }
    public class HISCustomerProductMappingDb
    {
        SSDbContext dbContext;
        public HISCustomerProductMappingDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IQueryable<HISCustomerProductMapping> GetAll()
        {
            return dbContext.HISCustomerProductMappings;
        }
        public IQueryable<HISCustomerProductMapping> GetById(int id)
        {
            return dbContext.HISCustomerProductMappings.Where(x => x.Id == id);
        }
        public async Task<bool> Create(HISCustomerProductMapping story)
        {
            dbContext.Add(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
        public async Task<bool> Update(HISCustomerProductMapping story)
        {
            dbContext.Update(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
        public async Task<bool> Delete(int SSid)
        {
            var s = dbContext.HISCustomerProductMappings.Find(SSid);
            dbContext.Remove(s);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
    }
}
