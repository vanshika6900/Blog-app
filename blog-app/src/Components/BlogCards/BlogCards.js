import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCards() {
  const content = [
    {
      img: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/a-cup-of-jo-website-homepage.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nisi.",
      _id: 1,
    },
    {
      img: "https://startbloggingonline.com/wp-content/uploads/2017/11/beauty-blog.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nisi.",
      _id: 2,
    },
    {
      img: "https://www.shoutmeloud.com/wp-content/uploads/2011/11/Advantages-and-Disadvantages-of-Blogging.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nisi.",
      _id: 3,
    },
  ];
  const navigate = useNavigate();
  return (
    <div>
      <div class="album py-5 bg-body-tertiary">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {content.map((e, id) => (
              <div class="col" key={id}>
                <div class="card shadow-sm">
                  <img src={e.img} alt="" style={{ height: "250px" }} />
                  <div class="card-body">
                    <p class="card-text">{e.desc}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          onClick={() => navigate(`/blogs/${e._id}`)}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCards;
