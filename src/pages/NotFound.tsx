import { Link } from 'react-router';
import { Button } from '@components/ui/Button';

export function NotFound() {
  return (
    <div className="app-main app-not-found">
      <div className="app-not-found-content">
        <div className="app-not-found-number">404</div>
        <h1 className="app-not-found-title">Page not found</h1>
        <p className="app-not-found-description">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="large">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
