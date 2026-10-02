import { Link } from 'react-router-dom';
import './CourseBackLink.css';

export default function CourseBackLink({ className = '' }) {
  return (
    <Link className={`course-back-link ${className}`.trim()} to="/courses">
      ← Back to Explore Courses
    </Link>
  );
}