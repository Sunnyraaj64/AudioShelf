const FeatureCard = ({ title, features, icon }) => {
  return (
    <div className="max-w-sm w-[100%] mx-auto bg-[#111] text-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-[#262626] p-3 rounded-[10px]">
          <img src={icon} alt="icon" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <ul className="space-y-2 mt-5">
        {features.map((feature, index) => (
          <li key={index}>
            {feature.label === "Upcoming Features" ? (
              <div className="text-[#a3a3a3] font-bold text-[14px]">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    viewBox="0 0 512 512"
                    className="mr-3 h-[13px]"
                  >
                    <path
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                      fill="#10b981"
                    />
                  </svg>
                  <p className="mb-2">{feature.label}:</p>
                </div>
                <ul className="ms-[3rem] list-disc text-white font-semibold">
                  {feature.value.split(/,|&/).map((item, subIndex) => (
                    <li key={subIndex}>{item.trim()}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="mr-3 h-[13px] mt-1 w-[40px]"
                >
                  <path
                    d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                    fill="#10b981"
                  />
                </svg>
                <p className="text-[#a3a3a3] font-bold text-[14px]">
                  {feature.label}:
                  <span className="text-white font-semibold">
                    {feature.value}
                  </span>
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
