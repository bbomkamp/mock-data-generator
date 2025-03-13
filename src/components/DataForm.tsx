import React, { useState } from 'react';

interface DataFormProps {
    onGenerate: (count: number) => void;
}

const DataForm: React.FC<DataFormProps> = ({ onGenerate }) => {
    const [count, setCount] = useState<number>(1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate(count);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2">Number of entries:</label>
                    <input
                        type="number"
                        min="1"
                        value={count}
                        onChange={(e) => setCount(parseInt(e.target.value))}
                        className="border p-2 rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Generate Data
                </button>
            </form>
        </div>
    );
};

export default DataForm;