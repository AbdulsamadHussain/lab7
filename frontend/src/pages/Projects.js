import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/projects');
                setProjects(res.data);
            } catch (err) {
                setError('Failed to load projects.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div>Loading projects...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="col-md-4 mb-4">
                    <div className="card p-3">
                        <h4>{project.name}</h4>
                        <p><strong>Author:</strong> {project.author}</p>
                        <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
