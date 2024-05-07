using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Data.Entity;
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        // public AppDbContext()
        // {
        // }

        public AppDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
        }

        public DbSet<User> Users { get; set; }

//         protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
// => dbContextOptionsBuilder.UseSqlServer("Server=tcp:medical-quick-notes.database.windows.net,1433;Initial Catalog=medicalQuickNotesDB;Persist Security Info=False;User ID=adminDB;Password={your_password};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<User>()
        //         .HasNoKey();
        // }
    }
}