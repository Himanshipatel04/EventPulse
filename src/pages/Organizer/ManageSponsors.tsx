import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext';

const ManageSponsors = () => {

    const [events, setEvents] = useState<any[]>([]);
    const [sponsors, setSponsors] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser()

    const formatToINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(amount);
    };


    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            try {
                if (user) {
                    const response = await axios.get(`http://localhost:4000/api/sponsor/getSponsorsForOrganizers/${user?._id}`);
                    setSponsors(response.data.data)
                    // console.log(response.data.data);
                    setIsLoading(false);
                }
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        fetchEvents();
    }, [user])

    const approveSponsor = async (sponsorId, email) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/sponsor/updateSponsor/${sponsorId}`, { status: "approved", email: email });
            console.log(response.data.data);
            // setIsLoading(false);                         
        } catch (error) {
            console.error(error);
            // setIsLoading(false);
        }
    }

    const rejectSponsor = async (sponsorId, email) => {
        try {
            const response = await axios.put(`http://localhost:4000/api/sponsor/updateSponsor/${sponsorId}`, { status: "rejected", email: email });
            console.log(response.data.data);
            // setIsLoading(false);                         
        } catch (error) {
            console.error(error);
            // setIsLoading(false);
        }
    }


    console.log(sponsors)

    return (
        <div className='min-h-[87vh]  p-0 md:p-6 mt-24 flex items-start justify-center'>
            <div className="mt-2 w-full outline max-w-screen-2xl outline-gray-200 outline-1 p-4 rounded-xl">
                <div className="flex  items-center justify-between border-b border-gray-200 pb-4">
                    <div className=''>
                        <h2 className="text-xl font-semibold text-teal-700">
                            Manage Sponsors
                        </h2>
                        <p className="text-sm text-gray-600">
                            View, edit, or delete your sponsors.
                        </p>

                    </div>
                </div>
                {/* From here */}
                {
                    sponsors?.length > 0 ?
                        (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5'>

                            {
                                sponsors.map((sponsor) => (
                                    <div key={sponsor._id}>
                                        <div className="max-w-sm mx-auto h-96 flex flex-col justify-between bg-white rounded-lg shadow-xl overflow-hidden border border-gray-300">
                                            <div className="p-6">
                                                <div className="font-bold text-2xl text-teal-500 mb-4">{sponsor.sponsorName}</div>

                                                <div className="text-gray-700 text-base space-y-3">
                                                    <div><strong>Amount:</strong> {formatToINR(sponsor.amount)}</div>
                                                    <div><strong>Event:</strong> {sponsor.eventId.title}</div>
                                                    <div><strong>Location:</strong> {sponsor.eventId.location}</div>
                                                    <div><strong>Date:</strong> {sponsor.eventId.date}</div>
                                                    <div><strong>Time (IST):</strong> {sponsor.eventId.time}</div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between p-4 bg-gray-100 rounded-b-lg">
                                                {sponsor.status === "pending" && <button onClick={() => approveSponsor(sponsor._id, sponsor.sponsorId.email)} className="w-full py-2 px-4 rounded-lg bg-teal-400 text-white font-semibold hover:bg-teal-500 transition duration-200 ease-in-out transform hover:scale-105">
                                                    Approve
                                                </button>}
                                                {sponsor.status == "pending" && <button onClick={() => rejectSponsor(sponsor._id, sponsor.sponsorId.email)} className="w-full py-2 px-4 ml-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition duration-200 ease-in-out transform hover:scale-105">
                                                    Reject
                                                </button>}
                                                {sponsor.status == "approved" && <button onClick={() => rejectSponsor(sponsor._id, sponsor.sponsorId.email)} className="w-full py-2 px-4 ml-4 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition duration-200 ease-in-out transform hover:scale-105">
                                                    Approved 
                                                </button>}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            } </div>)
                        :
                        (<p>No sponsors found</p>)
                }
            </div>
        </div>
    )
}

export default ManageSponsors
