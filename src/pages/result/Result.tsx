// import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

const Result = () => {
  return (
    <>
      <div className="p-24 h-screen">
        <Button variant="default">
          <Icon path={mdiArrowLeft} size={1.1} className="mr-3" /> Back to
          Homepage
        </Button>
      </div>
    </>
  );
};

export default Result;
