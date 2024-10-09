import React, { useState } from 'react';
import getDocument from '@/firebase/firestore/getData';

const FetchDataComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const handleFetchData = async () => {
        const { result, error } = await getDocument('your-collection-name', 'your-document-id');
        if (error) {
            setError(error.message);
        } else {
            setData(result.data());
        }
    };

    return (
        <div>
            <button onClick={handleFetchData}>Fetch Data</button>
            {error && <p>Error: {error}</p>}
            {data && <p>Data: {JSON.stringify(data)}</p>}
        </div>
    );
};

export default FetchDataComponent;
