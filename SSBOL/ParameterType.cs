using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace SSBOL
{
    [Table("ParameterType")]
   public class ParameterType
    {

        [Key]
        public int Id { get; set; }
        [Required]
        public int Name { get; set; }

        public int MainTypeId { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
    }
}
