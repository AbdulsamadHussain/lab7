import React, { useState } from 'react';


const allSkills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git', category: 'Tooling' },
    { name: 'Bootstrap', category: 'Frontend' }
];

const categories = ['Frontend', 'Backend', 'Database', 'Tooling'];

    function SkillList() {
        const [searchTerm, setSearchTerm] = useState('');
        const [selectedCategories, setSelectedCategories] = useState(new Set());

        // Toggle category filter
        const toggleCategory = (category) => {
            const updated = new Set(selectedCategories);
            updated.has(category) ? updated.delete(category) : updated.add(category);
            setSelectedCategories(updated);
        };

        const filteredSkills = allSkills.filter(skill => {
            const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(skill.category);
            return matchesSearch && matchesCategory;
        });

        return (
            <div className="mt-4">
                <h2>My Skills</h2>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search skills..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

                <div className="mb-3">
                    <strong>Filter by Category:</strong><br />
                    {categories.map(cat => (
                        <label key={cat} className="me-3">
                            <input
                                type="checkbox"
                                value={cat}
                                onChange={() => toggleCategory(cat)}
                                checked={selectedCategories.has(cat)}
                            /> {cat}
                        </label>
                    ))}
                </div>

                <div className="row">
                    {filteredSkills.length === 0 ? (
                        <p>No matching skills found.</p>
                    ) : (
                        filteredSkills.map((skill, idx) => (
                            <div key={idx} className="col-md-3 mb-3">
                                <div className="card p-2">
                                    <h5>{skill.name}</h5>
                                    <small className="text-muted">{skill.category}</small>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        );
    }

export default SkillList;
