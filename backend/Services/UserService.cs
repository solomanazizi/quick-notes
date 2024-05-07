using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using backend.Data;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            this._context = context ?? throw new ArgumentNullException(nameof(context));
        }
        public async Task<object> GetAllUsers()
        {
          try
          {
             return await _context.Users.ToListAsync();
          }
          catch (Exception excp)
          {
             // if you have a logging mechanism, implement here
             throw;
         }
    }
    }
}