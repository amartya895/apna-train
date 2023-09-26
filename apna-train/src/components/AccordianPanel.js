
const AccordianPanle = ({ faq, onToggle, isActive }) => {
    const { title, jsxChild } = faq;
    return (
      <div className="border-b-2 pb-2">
        <div
          className="flex justify-between mt-8  pb-2 cursor-pointer"
          onClick={onToggle}
        >
          <h1 className="text-lg text-gray-700">{title}</h1>
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer text-gray-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </div>
        {isActive && <div className="pb-8 pt-2 text-gray-500">{jsxChild}</div>}
      </div>
    );
  };

  export default AccordianPanle;
  