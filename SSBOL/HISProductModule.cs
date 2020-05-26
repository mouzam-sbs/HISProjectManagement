using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SSBOL
{
    [Table("HISProductModule")]
    public class HISProductModule
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public int ProductId { get; set; }
        public int ModuleId { get; set; }
        public int ParentId { get; set; }

        public string ProductImageUrl { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
    }
}
