import React, { useState } from 'react';
import DataForm from './components/DataForm';
import Preview from './components/Preview';
import { generateMockData } from './utils/mockDataGenerator';
import { MockUser } from './types';
import './App.css';

const App: React.FC = () => {
    const [mockData, setMockData] = useState<MockUser[]>([]);
    const [isDataGenerated, setIsDataGenerated] = useState<boolean>(false);

    const handleDataGeneration = (count: number, fields: string[]) => {
        const data = generateMockData(count, fields);
        setMockData(data);
        setIsDataGenerated(true);
    };

    const handleDownload = () => {
        const dataStr = JSON.stringify(mockData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mockData.json';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container">
            <h1 className="text-2xl font-bold mb-4">Mock Data Generator</h1>
            <div className="flex">
                <div className="left-panel">
                    <DataForm onGenerate={handleDataGeneration} />
                    <button
                        onClick={handleDownload}
                        className={`bg-green-500 text-white px-4 py-2 rounded mt-4 download-button ${!isDataGenerated ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!isDataGenerated}
                    >
                        Download JSON
                    </button>
                </div>
                <div className="right-panel">
                    {isDataGenerated && <Preview data={mockData} />}
                </div>
            </div>
        </div>
    );
};

export default App;