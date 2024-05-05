import React from 'react';
import { Navigate } from 'react-router-dom';

const withAdminAuth = (Component) => {
    const AuthenticatedComponent = (props) => {
        const isActivated = localStorage.getItem('isActive');

        if (isActivated !== 'true') {
            // Redirigir al usuario a la página de login 
            return <Navigate to="/login" />;
        }

        // Si 'isActivated' es 'true', renderizar el componente original
        return <Component {...props} />;
    };

    return AuthenticatedComponent;
};

export default withAdminAuth;
