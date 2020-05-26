using SSBOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSDAL
{
    public interface IHISCustomerDb
    {
        IQueryable<HISCustomer> GetAll();
        IQueryable<HISCustomer> GetById(int id);
        Task<bool> Create(HISCustomer model);
        Task<bool> Update(HISCustomer model);
        Task<bool> Delete(int id);
    }
    public  class HISCustomerDb: IHISCustomerDb
    {
        SSDbContext dbContext;
        public HISCustomerDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IQueryable<HISCustomer> GetAll()
        {
            return dbContext.HISCustomers;
        }
        public IQueryable<HISCustomer> GetById(int id)
        {
            return dbContext.HISCustomers.Where(x => x.Id == id);
        }
        public async Task<bool> Create(HISCustomer story)
        {
            dbContext.Add(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
        public async Task<bool> Update(HISCustomer story)
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
            var s = dbContext.HISCustomers.Find(SSid);
            dbContext.Remove(s);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }

    }
}
