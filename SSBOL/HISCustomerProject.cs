using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SSBOL
{
    [Table("HISCustomerProject")]
   public class HISCustomerProject
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int Description { get; set; }
        public int CustomerId { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
    }
}
