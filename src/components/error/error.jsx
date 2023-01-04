import React from 'react';


/**
 * @function Error
 * @returns 
 */
function Error() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
        <div className="font-medium">Wrong UserId !</div>Please change the UserId to 12 or 18
      </div>
    </div>
  );
}

export default Error;
