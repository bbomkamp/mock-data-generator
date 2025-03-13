import React, { useState, useEffect } from 'react';

interface DataFormProps {
    onGenerate: (count: number, fields: string[]) => void;
}

const DataForm: React.FC<DataFormProps> = ({ onGenerate }) => {
    const [count, setCount] = useState<number>(1);
    const [selectedFields, setSelectedFields] = useState<string[]>([
        'First Name',
        'Last Name'
    ]);

    useEffect(() => {
        // Ensure firstName and lastName are selected by default
        setSelectedFields(['First Name', 'Last Name']);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onGenerate(count, selectedFields);
    };

    const handleFieldChange = (field: string) => {
        setSelectedFields((prevFields) =>
            prevFields.includes(field)
                ? prevFields.filter((f) => f !== field)
                : [...prevFields, field]
        );
    };

    const isGenerateButtonDisabled = selectedFields.length === 0;

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
                <div>
                    <label className="block mb-2">Select fields to include:</label>
                    <div className="space-y-2">
                        {[
                            'Prefix',
                            'First Name',
                            'Middle Name',
                            'Last Name',
                            'Full Name',
                            'Suffix',
                            'Email',
                            'Bio',
                            'Birthday',
                            'Gender',
                            'Job Area',
                            'Job Descriptor',
                            'Job Title',
                            'Job Type',
                            'Sex',
                            'Zodiac Sign'
                            
                            
                        ].map((field) => (
                            <div key={field}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedFields.includes(field)}
                                        onChange={() => handleFieldChange(field)}
                                    />
                                    {field}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    type="submit"
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${isGenerateButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isGenerateButtonDisabled}
                >
                    Generate Data
                </button>
            </form>
        </div>
    );
};

export default DataForm;