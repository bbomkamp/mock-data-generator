import React from 'react';
import { MockUser } from '../types';

interface PreviewProps {
    data: MockUser[];
}

const Preview: React.FC<PreviewProps> = ({ data }) => {
    return (
        <div className="preview-container">
            <pre className="preview-content">
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    );
};

export default Preview;