import { VscLocation } from 'react-icons/vsc';
import { CiDollar } from 'react-icons/ci';
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className='mt-4 flex gap-2'>
                        <VscLocation className='text-2xl'></VscLocation>{location}
                        <CiDollar className='text-2xl'>{salary}</CiDollar>{salary}
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;