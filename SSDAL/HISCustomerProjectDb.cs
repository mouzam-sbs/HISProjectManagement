using SSBOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSDAL
{
    public interface IHISCustomerProjectDb
    {
        IQueryable<HISCustomerProject> GetAll();
        IQueryable<HISCustomerProject> GetById(int id);
        Task<bool> Create(HISCustomerProject model);
        Task<bool> Update(HISCustomerProject model);
        Task<bool> Delete(int id);
    }
    public class HISCustomerProjectDb
    {
        SSDbContext dbContext;
        public HISCustomerProjectDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IQueryable<HISCustomerProject> GetAll()
        {
            return dbContext.HISCustomerProjects;
        }
        public IQueryable<HISCustomerProject> GetById(int id)
        {
            return dbContext.HISCustomerProjects.Where(x => x.Id == id);
        }
        public async Task<bool> Create(HISCustomerProject story)
        {
            dbContext.Add(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
        public async Task<bool> Update(HISCustomerProject story)
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
            var s = dbContext.HISCustomerProjects.Find(SSid);
            dbContext.Remove(s);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
    }
}
