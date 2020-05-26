using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SSBOL
{
    [Table("HISCustomer")]
    public class HISCustomer
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string CustomerName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }
        public string Address { get; set; }

        public string CustomerLogoUrl { get; set; }

        public DateTime CreatedOn { get; set; }

        public int CreatedBy { get; set; }
    }
}
