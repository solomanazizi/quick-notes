using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Services;
using backend.Data;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
    // private readonly IUserService _userService;
    private readonly AppDbContext _dbContext;

public UserController(AppDbContext dbContext)
{
    _dbContext = dbContext;
}

[HttpGet]
public IActionResult GetAll()
{
    // var users = _dbContext.Users.ToList();
    List<User> usersMock = new List<User> {
        new User { Id = 1, FirstName = "Soloman", LastName= "Azizi" },
        new User { Id = 2, FirstName = "Maryam", LastName="Azizi" },
        // Add more users as needed
    };

    if(usersMock == null) {
        return NotFound();
    }

    return Ok(usersMock);
}

[HttpGet("{id}")]
public IActionResult GetById([FromRoute] int id)
{
    var user = _dbContext.Users.Find(id);

    if(user == null) {
        return NotFound();
    }

    return Ok(user);
}
        // public UserController(IUserService userService)
        // {
        //     this._userService = userService;
        // }

        // [HttpGet]
        // [Route("GetAllUsers")]  
        // public async Task<IActionResult> GetAllUsers()
        // {
        //     return Ok(await _userService.GetAllUsers());
        // }

    }
}