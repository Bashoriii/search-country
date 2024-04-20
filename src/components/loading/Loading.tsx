import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';

const handleLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
      <Icon className="text-white" path={mdiLoading} size={2} />
      <p className="text-white text-3xl ml-2">Loading...</p>
    </div>
  );
};

export default handleLoading;
