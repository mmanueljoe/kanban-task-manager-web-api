import { Button } from '@components/ui/Button';
import { useAuth } from '@hooks/useAuth';
import { useNavigate } from 'react-router';

export function Admin() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    void navigate('/login', { replace: true });
  };

  return (
    <div className="app-main">
      <div className="app-admin-container">
        <div className="app-admin-header">
          <div className="app-admin-icon">👤</div>
          <h1 className="app-admin-title">Admin Panel</h1>
          <p className="app-admin-subtitle">Manage your account settings</p>
        </div>

        <div className="app-admin-content">
          <div className="app-admin-info-card">
            <div className="app-admin-info-row">
              <span className="app-admin-label">Logged in as</span>
              <span className="app-admin-value">{user?.name ?? 'Guest'}</span>
            </div>
            {user?.email && (
              <div className="app-admin-info-row">
                <span className="app-admin-label">Email</span>
                <span className="app-admin-value">{user.email}</span>
              </div>
            )}
          </div>

          <div className="app-admin-actions">
            <Button variant="destructive" size="large" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
