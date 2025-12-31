const Dashboard = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center">
        <h1 className="text-black text-2xl font-inter font-bold mt-5 ">
          Dashboard
        </h1>

        {/* Status Buttons */}
        <div className="flex items-center mt-10 gap-3 font-inter text-sm">
          <div className="text-white flex justify-center items-center w-[100px] bg-[#D90000] border border-[#D90000] rounded-3xl py-2 hover:bg-white hover:text-[#D90000] transition duration-300">
            <button type="button">Pending</button>
          </div>
          <div className="flex text-[#00d900] justify-center items-center w-[100px] border border-[#00d900] rounded-3xl p-2 hover:bg-[#00d900] hover:text-white transition duration-300">
            <button type="button">Complete</button>
          </div>
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
          <div className="bg-[#eeeeee] -mx-6 px-6 mt-5 border border-black min-h-[50px] h-auto p-2 w-auto flex items-center rounded-lg">
            <div className="grid grid-cols-10 text-center w-full text-sm break-words">
              <p>01</p>
              <p>John Doe</p>
              <p>9876543210</p>
              <p>New York</p>
              <p>12-Jan</p>
              <p>15-Jan-2025</p>
              <p>20-Jan</p>
              <p>
                Sprinkler System Installation is to be implemented in this
                location as soon as possible
              </p>
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"
                  className=" accent-black cursor-pointer h-4 w-4"
                />
              </div>
              <p>10,000</p>
            </div>
          </div>

          <div className="bg-[#eeeeee] -mx-6 px-6 mt-5 border border-black min-h-[50px] h-auto p-2 w-auto flex items-center rounded-lg">
            <div className="grid grid-cols-10 text-center w-full text-sm break-all">
              <p>01</p>
              <p>John Doe</p>
              <p>9876543210</p>
              <p>New York</p>
              <p>12-Jan</p>
              <p>15-Jan-2025</p>
              <p>20-Jan</p>
              <p>Sprinkler System Installation</p>
              <div className="flex justify-center items-center">
                <input
                  type="checkbox"
                  className=" accent-black cursor-pointer h-4 w-4"
                />
              </div>
              <p>10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
