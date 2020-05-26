using SSBOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSDAL
{
    public interface IHISProductDb
    {
        IQueryable<HISProduct> GetAll(); 
        IQueryable<HISProduct> GetById(int id);         
        Task<bool> Create(HISProduct model);
        Task<bool> Update(HISProduct model);
        Task<bool> Delete(int id);
    }
    public class HISProductDb:IHISProductDb
    {

        SSDbContext dbContext;

        public HISProductDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }


        public IQueryable<HISProduct> GetAll()
        {
            return dbContext.HISProducts;
        }

        public IQueryable<HISProduct> GetById(int id)
        {
            return dbContext.HISProducts.Where(x => x.Id == id);
        }
        public async Task<bool> Create(HISProduct story)
        {
            dbContext.Add(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }


        public async Task<bool> Update(HISProduct story)
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
            var s = dbContext.Stories.Find(SSid);
            dbContext.Remove(s);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }



    }
}
