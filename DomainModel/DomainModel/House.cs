namespace DomainModel
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("House")]
    public partial class House
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public House()
        {
            Phones = new HashSet<Phone>();
        }

        public int HouseId { get; set; }

        [Required]
        [StringLength(10)]
        public string Number { get; set; }

        public int StreetId { get; set; }

        public int SuburbId { get; set; }

        public int StateId { get; set; }

        public virtual State State { get; set; }

        public virtual Street Street { get; set; }

        public virtual Suburb Suburb { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Phone> Phones { get; set; }
    }
}
