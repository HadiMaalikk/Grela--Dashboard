import { useState } from "react";

type job = {
  id: number;
  client: string;
  phone: string;
  location: string;
  bookingDate: string;
  workDate: string;
  completionDate: string;
  remarks: string;
  completed: boolean;
  payment: string;
};

const Dashboard = () => {

/*below code is for the pop up ui when clicking the '+' symbol*/ 
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState<"pending" | "completed">("pending");
  const [job, setJobs] = useState<job[]>([
    {
      id: 1,
      client: "John Doe",
      phone: "9876543210",
      location: "New York",
      bookingDate: "12-Jan",
      workDate: "15-Jan-2025",
      completionDate: "20-Jan",
      remarks:
        "Sprinkler System Installation is to be implemented in this location as soon as possible",
      completed: false,
      payment: "10,000",
    },
    {
      id: 2,
      client: "Jane Smith",
      phone: "1234567890",
      location: "Los Angeles",
      bookingDate: "10-Feb",
      workDate: "14-Feb-2025",
      completionDate: "18-Feb",
      remarks: "Regular maintenance of the sprinkler system",
      completed: true,
      payment: "8,000",
    },
  ]);

  const filteredJobs = job.filter((job) =>
    filter === "completed" ? job.completed : !job.completed
  );

  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center">
        <h1 className="text-black text-2xl font-inter font-bold mt-5 ">
          Dashboard
        </h1>

        {/* Status Buttons */}
        <div className="flex items-center mt-10 gap-3 font-inter text-sm">
          <button
            onClick={() => setFilter("pending")}
            className={`w-[100px] py-2 rounded-3xl border transition duration-300
      ${
        filter === "pending"
          ? "bg-[#D90000] text-white border-[#D90000]"
          : "text-[#D90000] border-[#D90000] hover:bg-[#D90000] hover:text-white"
      }`}
          >
            Pending
          </button>

          <button
            onClick={() => setFilter("completed")}
            className={`w-[100px] py-2 rounded-3xl border transition duration-300
      ${
        filter === "completed"
          ? "bg-[#00d900] text-white border-[#00d900]"
          : "text-[#00d900] border-[#00d900] hover:bg-[#00d900] hover:text-white"
      }`}
          >
            Complete
          </button>
        </div>

        {/* Parent container */}
        <div className="flex flex-col w-[80%] mt-10">
          {/* HEADERS */}
          {/* Changed flex to 'grid grid-cols-10' for rigid alignment */}
          <div className="grid grid-cols-10 text-center pb-2 font-semibold text-sm">
            <p>Sl. No.</p>
            <p>Client Name</p>
            <p>Phone</p>
            <p>Location</p>
            <p>Booking Date</p>
            <p>Work Date</p>
            <p>Completion Date</p>
            <p>Remarks</p>
            <p>Status</p>
            <p>Payment</p>
          </div>

          {/* CONTENT BOX */}
          <button className="text-2xl bg-[#eeeeee] -mx-6 px-6 mt-5 border border-black min-h-[50px] h-auto p-2 w-auto flex justify-center items-center rounded-lg">
            +
          </button>

          {/* 1. -mx-6 pulls the box OUT.
              2. px-6 pushes the content back IN to match the header width. 
              3. We use the SAME 'grid-cols-10' inside. */}

 {filteredJobs.map((job, index) => (
          <div
            key={job.id}
            className="bg-[#eeeeee] -mx-6 px-6 mt-5 border border-black min-h-[50px] p-2 flex items-center rounded-lg"
          >
            <div className="grid grid-cols-10 place-items-center text-center w-full text-sm break-words">
              <p>{index + 1}</p>
              <p>{job.client}</p>
              <p>{job.phone}</p>
              <p>{job.location}</p>
              <p>{job.bookingDate}</p>
              <p>{job.workDate}</p>
              <p>{job.completionDate}</p>
              <p>{job.remarks}</p>

              <div className="flex justify-center items-center">
                <input
                  type="checkbox"
                  checked={job.completed}
                  onChange={() =>
                    setJobs((prev) =>
                      prev.map((j) =>
                        j.id === job.id
                          ? { ...j, completed: !j.completed }
                          : j
                      )
                    )
                  }
                  className="accent-black cursor-pointer h-4 w-4"
                />
              </div>

              <p>{job.payment}</p>
            </div>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No records found
          </p>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
