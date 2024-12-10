import React from 'react';

const LogPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;

    try {
        const response = await fetch(`http://localhost:3000/api/get/${id}`, {
            next: { revalidate: 60 }, // Optional for ISR caching
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data for id: ${id}`);
        }

        const measure = await response.json();

        return (
            <div>
                <h1>Log ID: {id}</h1>
                <p>Data: {JSON.stringify(measure)}</p>
            </div>
        );
    } catch (error) {
        console.error('Error fetching data:', error);
        return <div>Error loading data for Log ID: {id}</div>;
    }
};

export default LogPage;
