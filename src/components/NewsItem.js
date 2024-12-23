import React from 'react';

const NewsItem = (props) => {
  let { title, description, myImg, myNewsUrl, author, date, source } = props;
  return (
    <div className="my-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={myImg || "https://via.placeholder.com/150"} // Fallback image
          className="card-img-top"
          alt={title || "News Image"} // Meaningful alt text
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description ? description + "..." : "No description available."}</p>
          <p className="card-text">
            <small className="text-body-secondary" style={{ fontWeight: "bold" }}>
              By {author || "Atharva"} on {date ? new Date(date).toGMTString() : "Unknown date"}
            </small>
          </p>
          <a
            href={myNewsUrl || "#"} // Fallback URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
