using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using SSBOL;
using SSDAL;

namespace SSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HISProdcutController : ControllerBase
    {
        IHISProductDb productDb;

        public HISProdcutController(IHISProductDb _productDb)
        {
            productDb = _productDb;
        }

        [HttpGet]
        public async Task<IActionResult> GetCustomers()
        {
            var strs = await productDb.GetAll().ToListAsync();
            return Ok(strs);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCusomersById(int id)
        {
            var str = await productDb.GetById(id).FirstOrDefaultAsync();
            return Ok(str);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var result = await productDb.Delete(id);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> PostCustomer(HISProduct project)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var result = await productDb.Create(project);
                    return CreatedAtAction("GetCusomersById", new { id = project.Id }, project);
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception E)
            {
                //E
                var msg = (E.InnerException != null) ? (E.InnerException.Message) : (E.Message);
                return StatusCode(500, "Admin is working on it! " + msg);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, HISProduct project)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (productDb.GetById(id) != null)
                    {
                        var result = await productDb.Update(project);
                        return NoContent();
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception E)
            {
                //E
                var msg = (E.InnerException != null) ? (E.InnerException.Message) : (E.Message);
                return StatusCode(500, "Admin is working on it! " + msg);
            }
        }
    }
}