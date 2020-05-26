using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SSBOL
{
    [Table("HISCustomerProjectDetail")]
    public class HISCustomerProjectDetail
    {
        [Key]
        public int Id { get; set; }
        public string CustomerId { get; set; }
        public int ProjectId { get; set; }
        public int PamaterTypeId { get; set; }
        public string PamaterTypeValue { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
    }
}
