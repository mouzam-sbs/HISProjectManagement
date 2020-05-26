using SSBOL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SSDAL
{
    public interface IParameterTypeDb
    {
        IQueryable<ParameterType> GetAll();
        IQueryable<ParameterType> GetById(int id);
        Task<bool> Create(ParameterType model);
        Task<bool> Update(ParameterType model);
        Task<bool> Delete(int id);
    }
    public class ParameterTypeDb
    {
        SSDbContext dbContext;
        public ParameterTypeDb(SSDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public IQueryable<ParameterType> GetAll()
        {
            return dbContext.ParameterTypes;
        }
        public IQueryable<ParameterType> GetById(int id)
        {
            return dbContext.ParameterTypes.Where(x => x.Id == id);
        }
        public async Task<bool> Create(ParameterType story)
        {
            dbContext.Add(story);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
        public async Task<bool> Update(ParameterType story)
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
            var s = dbContext.ParameterTypes.Find(SSid);
            dbContext.Remove(s);
            var result = await dbContext.SaveChangesAsync();
            if (result != 0)
                return true;
            else
                return false;
        }
    }
}
