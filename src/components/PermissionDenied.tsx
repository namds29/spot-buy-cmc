import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface PermissionDeniedProps {
  onRedirect: () => void;
}

const PermissionDenied: React.FC<PermissionDeniedProps> = ({ onRedirect }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-6">
            You do not have permission to access this application. 
            Only users with 'admin' or 'finance' roles are allowed.
          </p>
          
          <Button 
            onClick={onRedirect}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            Redirect to YouTube
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PermissionDenied;