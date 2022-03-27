using System.Collections.Generic;
using Gifter.Models;

namespace Gifter.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile user);

        UserProfile GetByEmail(string email);
    }
}