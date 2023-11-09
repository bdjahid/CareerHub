import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage";


const AppliedJob = () => {
    const [appliedJob, setAppliedJob] = useState()
    const jobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.ib === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [])
    return (
        <div>
            AppliedJob
        </div>
    );
};

export default AppliedJob;