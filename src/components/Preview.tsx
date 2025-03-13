import React from 'react';
import { MockUser } from '../types';

interface PreviewProps {
    data: MockUser[];
}

const Preview: React.FC<PreviewProps> = ({ data }) => {
    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Generated Data Preview</h2>
            <pre className="bg-gray-100 p-4 rounded">
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
};

export default Preview;