using SSBOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSDAL
{
    public interface IHISProductModuleDb
    {
        IQueryable<HISProductModule> GetAll();
        IQueryable<HISProductModule> GetById(int id);
        Task<bool> Create(HISProductModule model);
        Task<bool> Update(HISProductModule model);
        Task<bool> Delete(int id);
    }
    public class HISProductModuleDb
    {
        SSDbContext dbContext;
        public HISProductModuleDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IQueryable<HISProductModule> GetAll()
        {
            return dbContext.HISProductModules;
        }
        public IQueryable<HISProductModule> GetById(int id)
        {
            return dbContext.HISProductModules.Where(x => x.Id == id);
        }
        public async Task<bool> Create(HISProductModule story)
        {
            dbContext.Add(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
        public async Task<bool> Update(HISProductModule story)
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
            var s = dbContext.HISProductModules.Find(SSid);
            dbContext.Remove(s);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
    }
}
