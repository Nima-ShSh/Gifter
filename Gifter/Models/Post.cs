using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Gifter.Models
{
    public class Post
    {
        //constructor method running as soon as the pull request comes into add a post
        //public Post()
        //{
        //    DateCreated = DateTime.Now;
        //}
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        public string Caption { get; set; }

        //[Required]    taking this off but we still need to generate it fo rthe DB
        public DateTime DateCreated { get; set; }

        [Required]
        public int UserProfileId { get; set; }

        public UserProfile UserProfile { get; set; }

        public List<Comment> Comments { get; set; } = new List<Comment>();

    }
}