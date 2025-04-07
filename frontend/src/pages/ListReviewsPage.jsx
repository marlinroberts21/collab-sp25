import React, { useState, useEffect } from 'react';
import ReviewCard from '../components/ReviewCard';
import { Link } from 'react-router-dom';

export default function ListReviewsPage() {
  // Store reviews, selected sorting filter, and any errors from server
  const [reviews, setReviews] = useState([]);
  const [sortFilter, setSortFilter] = useState('rating');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' }); // "Jan", "Feb", etc.
    const day = date.getDate();
    const year = date.getFullYear();
    
    return `${month} ${day}, ${year}`;
  };

  useEffect(() => {
    // Fetch reviews from server
    fetch('http://localhost:8000/reviews')
      .then(response => response.json())
      .then(data => {
        // Set reviews
        setReviews(data);
        setLoading(false); // stops fetching
      })
      .catch(err => {
        setError('Could not load reviews');
        setLoading(false);
      });
  }, []);

  // Handles changes to sorting filters
  const handleSortChange = (event) => {
    setSortFilter(event.target.value);
  };

  // Handles changes to the sort order
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Sort reviews based on selected filter and order
  const sortedReviews = reviews.sort((a, b) => {
    if (sortOrder === 'asc') {
      if (sortFilter === 'rating') return a.rating - b.rating;
      if (sortFilter === 'name') return a.name.localeCompare(b.name);
      if (sortFilter === 'comment') return a.comment.localeCompare(b.comment);
      if (sortFilter === 'reviewDate') return a.reviewDate.localeCompare(b.reviewDate);
    } else {
      if (sortFilter === 'rating') return b.rating - a.rating;
      if (sortFilter === 'name') return b.name.localeCompare(a.name);
      if (sortFilter === 'comment') return b.comment.localeCompare(a.comment);
      if (sortFilter === 'reviewDate') return a.reviewDate.localeCompare(b.reviewDate);
    }
  });

  // Show message while searching
  if (loading) return <div className="container section-3">Loading reviews...</div>;

  if (error) return <div className="container section-3 text-danger">{error}</div>;

  return (
    <>
      <div className="container section-3">
        <h1 className="custom-blue mb-4">Customer Reviews</h1>

        {/* Sorting controls */}
        <div className="mb-3 d-flex gap-3 align-items-center">
          <label htmlFor="sortFilter" className="form-label mb-0">Sort by:</label>
          <select id="sortFilter" value={sortFilter} onChange={handleSortChange} className="form-select w-auto">
            <option value="rating">Rating</option>
            <option value="name">Name</option>
            <option value="comment">Comment</option>
            <option value="reviewDate">Date</option>
          </select>

          <select value={sortOrder} onChange={handleSortOrderChange} className="form-select w-auto">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>

          {/* Link to ReviewsPage */}
          <Link to="/leave_review">
            <div><button className="btn btn-secondary">Leave A Review</button></div>
          </Link>
        </div>

        {/* Display review, scrollable */}
        <div className="border p-3 overflow-auto">
          {/* Map through and display reviews */}
          {sortedReviews.map((review) => (
            <div
              key={review.id}
              className="p-2 mb-3"
            >
              {/* Access review card component, kudos to Kevin for building and sharing that component */}
              <ReviewCard review={review} formatDate={formatDate(review.reviewDate)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
