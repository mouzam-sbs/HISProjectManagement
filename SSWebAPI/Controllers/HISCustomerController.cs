using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using SSBOL;
using SSDAL;

namespace SSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HISCustomerController : ControllerBase
    {
        IHISCustomerDb customerDb;

        public HISCustomerController(IHISCustomerDb _customerDb)
        {
            customerDb = _customerDb;
        }
        [HttpGet]
        public async Task<IActionResult> GetCustomers()
        {
            var strs = await customerDb.GetAll().ToListAsync();
            return Ok(strs);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCusomersById(int id)
        {
            var str = await customerDb.GetById(id).FirstOrDefaultAsync();
            return Ok(str);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(int id)
        {
            var result = await customerDb.Delete(id);
            return NoContent();
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> PostCustomer()
        {
            try
            {
                var model = JsonConvert.DeserializeObject<HISCustomer>(Request.Form["myModel"].ToString());
                if (ModelState.IsValid)
                {
                    var result = await customerDb.Create(model);
                    if (Request.Form.Files.Count > 0)
                    {
                        var filePath = Path.GetFullPath("~/ProfilePics/" + model.Id + ".jpeg").Replace("~\\", "");

                        using (var stream = new FileStream(filePath, FileMode.Create))
                        {
                            Request.Form.Files[0].CopyTo(stream);
                        }
                    }
                    return CreatedAtAction("GetCusomersById", new { id = model.Id }, model);
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
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(int id, HISCustomer customer)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (customerDb.GetById(id) != null)
                    {
                        var result = await customerDb.Update(customer);
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

      
        [HttpGet("getCustomerLogo")]
        public IActionResult GetCustomerLogo(int customerId)
        {
            var filePath = Path.GetFullPath("~/ProfilePics/" + customerId + ".jpeg").Replace("~\\", "");
            if (!System.IO.File.Exists(filePath))
            {
                filePath = Path.GetFullPath("~/ProfilePics/universal.jpeg").Replace("~\\", "");
            }
            var profilePic = System.IO.File.OpenRead(filePath);
            return File(profilePic, "image/jpeg");
        }
    }
}