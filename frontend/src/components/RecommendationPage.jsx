import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RECOMMENDATION_API_END_POINT } from '@/utils/constant'
import NavBar from './shared/NavBar'

export default function RecommendationPage() {
    const [recommendations, setRecommendations] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchRecommendations = async () => {
        try {
            setLoading(true)
            setError(false)

            const res = await axios.get(`${RECOMMENDATION_API_END_POINT}/get`, {
                withCredentials: true
            })

            if (res.data.success) {
                setRecommendations(res.data.recommendations)
            } else {
                setError(true)
            }
        } catch (err) {
            console.error(err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRecommendations()
    }, []);

    if (loading) return <div>Loading recommendations...</div>
    if (error) return <div>Failed to load recommendations.</div>
    if (recommendations.length === 0) return <div>No recommendations available.</div>

    return (

        <>
            <NavBar />

            <div className="max-w-4xl mx-auto p-4 space-y-4 my-2.5 text-gray-900 dark:text-gray-100">
                {recommendations.map((rec, index) => (
                    <div
                        key={rec.job._id || index}
                        className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={rec.job.company.logo}
                                alt={rec.job.company.name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-bold">{rec.job.title}</h2>
                                <p className="text-sm text-gray-900 dark:text-gray-100">
                                    {rec.job.company.name}
                                </p>
                            </div>
                        </div>

                        <p className="mt-2 text-gray-900 dark:text-gray-100">
                            {rec.job.description}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
                            <span className="text-gray-900 dark:text-gray-100">
                                Salary: ₹{rec.job.salary}
                            </span>
                            <span className="text-gray-900 dark:text-gray-100">
                                Experience: {rec.job.experienceLevel} yrs
                            </span>
                            <span className="text-gray-900 dark:text-gray-100">
                                Location: {rec.job.location}
                            </span>
                            <span className="text-gray-900 dark:text-gray-100">
                                Type: {rec.job.jobType}
                            </span>
                        </div>

                        <p className="mt-2 text-blue-500 font-medium">
                            Score: {rec.score}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}


