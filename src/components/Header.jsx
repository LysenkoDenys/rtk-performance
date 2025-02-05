import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCount, getCount } from '../features/posts/postsSlice';

const Header = () => {
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  return (
    <header>
      <h1>Redux blog</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">Users</Link>
          </li>
        </ul>
        <button
          className="btn-counter"
          onClick={() => dispatch(increaseCount())}
        >
          {count}
        </button>
      </nav>
    </header>
  );
};

export default Header;
