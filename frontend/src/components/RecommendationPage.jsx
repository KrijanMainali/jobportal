import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RECOMMENDATION_API_END_POINT } from "@/utils/constant";
import NavBar from "./shared/NavBar";

export default function RecommendationPage() {
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchRecommendations = async () => {
        try {
            setLoading(true);
            setError(false);

            const res = await axios.get(
                `${RECOMMENDATION_API_END_POINT}/get`,
                {
                    withCredentials: true,
                }
            );

            if (res.data.success) {
                setRecommendations(res.data.recommendations);
            } else {
                setError(true);
            }
        } catch (err) {
            console.error(err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecommendations();
    }, []);

    if (loading)
        return (
            <>
                <NavBar />
                <div className="text-center mt-10">
                    Loading recommendations...
                </div>
            </>
        );

    if (error)
        return (
            <>
                <NavBar />
                <div className="text-center mt-10 text-red-500">
                    Failed to load recommendations.
                </div>
            </>
        );

    if (recommendations.length === 0)
        return (
            <>
                <NavBar />
                <div className="text-center mt-10">
                    No recommendations available.
                </div>
            </>
        );

    return (
        <>
            <NavBar />

            <div className="max-w-4xl mx-auto p-4 space-y-4 my-4">
                {recommendations.map((rec) => (
                    <Link
                        key={rec.job._id}
                        to={`/description/${rec.job._id}`}
                        className="block"
                    >
                        <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-blue-500 transition duration-200 cursor-pointer bg-white dark:bg-gray-900">
                            <div className="flex items-center gap-4">
                                <img
                                    src={rec.job.company.logo}
                                    alt={rec.job.company.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {rec.job.title}
                                    </h2>

                                    <p className="text-gray-600 dark:text-gray-300">
                                        {rec.job.company.name}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-700 dark:text-gray-300">
                                {rec.job.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                                <span>
                                    <strong>Salary:</strong> ₹{rec.job.salary}
                                </span>

                                <span>
                                    <strong>Experience:</strong>{" "}
                                    {rec.job.experienceLevel} yrs
                                </span>

                                <span>
                                    <strong>Location:</strong>{" "}
                                    {rec.job.location}
                                </span>

                                <span>
                                    <strong>Type:</strong> {rec.job.jobType}
                                </span>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <p className="text-blue-600 font-semibold">
                                    Score: {rec.score}
                                </p>

                                <span className="text-blue-600 font-medium hover:underline">
                                    View Job →
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

