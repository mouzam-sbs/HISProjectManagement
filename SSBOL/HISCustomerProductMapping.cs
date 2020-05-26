using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SSBOL
{
    [Table("HISCustomerProductMapping")]
    public  class HISCustomerProductMapping
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int ProductId { get; set; }
        public int ModuleId { get; set; }
        public int CustomerId { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
    }
}
