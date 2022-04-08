using ShoppingStore.DataAccess.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingStore.DataAccess.Repositories
{
    public class UnitOfWork:IUnitOfWork
    {
        public ICategoryRepository Category { get; private set; }
        public IProductRepository Product { get; private set; }
        //public IClothRepository Cloth { get;private set; }
        //public IApplicationUser ApplicationUser { get; private set;}
        //public IOrderHeaderRepository OrderHeader { get;private set; }
        //public IOrderDetailRepository OrderDetail { get;private set; }
        private ApplicationDbContext _context;
        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Category = new CategoryRepository(context);
            Product = new ProductRepository(context);
            //Cloth = new ClothRepository(context);
            //ApplicationUser = new ApplicationUser(context);
            //OrderHeader = new OrderHeaderRepository(context);
            //OrderDetail = new OrderDetailRepository(context);
        }
        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
