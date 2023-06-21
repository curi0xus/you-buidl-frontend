import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contributers from "../components/Contributers";
import Modals from "../components/modals";
import CongratsModalWrapper from "../components/modals/CongratsModalWrapper";

const WidthdrawRequest = () => {
  const navigate = useNavigate();

  // Details Modal State
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Congrats Modal State
  const [showCongratsModal, showShowCongratsModal] = useState(false);

  // State for Vote Button
  const [isUserVoted, setIsUserVoted] = useState(false);
  return (
    <>
      {/* Details Modal */}
      <Modals showModal={showDetailsModal} setShowModal={setShowDetailsModal}>
        <div className="max-w-sm sm:w-96 rounded-2xl bg-Pure-White">
          <div className="px-3 pt-3 pb-1.5 space-y-4">
            <div className="max-w-xs mx-auto py-5 space-y-4">
              <div className="space-y-1 ">
                <h1 className="font-normal text-base ">
                  700 USDT Requested for withdrawal by
                </h1>
                <div className="flex items-center space-x-1">
                  <img src="/assets/images/avatar-4.png" alt="avatar" />
                  <h3 className="text-Davy-Grey font-medium text-xs">
                    Cameron.eth{" "}
                  </h3>
                  <a
                    href="/"
                    className="bg-Chinese-Blue text-Pure-White rounded-md text-xs py-0.5 px-2"
                  >
                    view on explorer
                  </a>
                </div>
              </div>

              <div className="text-Eire-Black space-y-0.5">
                <div className="flex justify-between ">
                  <h2 className="font-normal text-base ">Amount Requested</h2>
                  <h2 className="font-normal text-base ">7000 USDT</h2>
                </div>

                <div className="flex justify-between ">
                  <h2 className="font-normal text-base ">Total Votes</h2>
                  <h2 className="font-normal text-base ">3,211</h2>
                </div>
                <div className="flex justify-between ">
                  <h2 className="font-normal text-base ">Receipient Address</h2>
                  <h2 className="font-normal text-base ">0x765..hy7</h2>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 font-semibold text-base">
              <button
                onClick={() => setShowDetailsModal(false)}
                className="text-Chinese-Blue border-2 border-Chinese-Blue flex-1 py-2 rounded-4xl"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowDetailsModal(false);
                  showShowCongratsModal(true);
                }}
                className="bg-Chinese-Blue flex-1 border border-Chinese-Blue text-Pure-White py-2 rounded-4xl"
              >
                Withdraw
              </button>
            </div>
            <hr className="h-1 mx-auto w-4/12 rounded-full bg-Pure-Black" />
          </div>
        </div>
      </Modals>

      {/* Congrats Modal */}
      <Modals
        showModal={showCongratsModal}
        setShowModal={showShowCongratsModal}
      >
        <CongratsModalWrapper>
          {" "}
          <div className="space-y-2 py-6">
            <h1 className="text-Bright-Gray font-medium text-xl">
              Congratulation!
            </h1>
            <h4 className="text-Bright-Gray/90 font-normal text-sm">
              Your Request has been Submitted for Widthdraw.
            </h4>
          </div>
          <button
            onClick={() => showShowCongratsModal(false)}
            className="bg-Pure-White text-Pure-Black text-sm font-medium rounded-xl py-2 px-6"
          >
            Close
          </button>
        </CongratsModalWrapper>
      </Modals>

      <div className="flex relative">
        <div className="flex-1 space-y-4 md:space-y-6 mr-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div
                onClick={() => {
                  navigate(-1);
                }}
                className="bg-Steel-Blue rounded-lg p-2 bg-opacity-30 shadow-sm cursor-pointer"
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M23.8616 15.0703H6.27942"
                    stroke="#43489D"
                    strokeWidth="2.51174"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.8"
                    d="M15.0705 23.8615L6.27942 15.0704L15.0705 6.2793"
                    stroke="#43489D"
                    strokeWidth="2.51174"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h1 className="font-semibold text-sm sm:text-lg text-Raisin-Black">
                Withdrawal request for Build a Web3 Marketplace
              </h1>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="4.75"
                cy="12.25"
                r="1.75"
                transform="rotate(-90 4.75 12.25)"
                fill="#43489D"
              />
              <circle
                cx="11.75"
                cy="12.25"
                r="1.75"
                transform="rotate(-90 11.75 12.25)"
                fill="#43489D"
              />
              <circle
                cx="18.75"
                cy="12.25"
                r="1.75"
                transform="rotate(-90 18.75 12.25)"
                fill="#43489D"
              />
            </svg>
          </div>

          <div className="bg-Anti-Flash-White rounded-4xl py-6 sm:py-10 shadow-details">
            <div className="max-w-lg px-2 mx-auto space-y-6">
              <div className="flex items-start flex-col sm:flex-row w-full sm:w-fit space-y-2 sm:space-y-0 sm:space-x-6">
                <div className="bg-Pure-Black p-2 w-full sm:w-52 sm:h-52 rounded-2xl">
                  <img
                    className="w-full h-full"
                    src="/assets/images/contribution.png"
                    alt="contribution"
                  />
                </div>
                <div className="space-y-1 w-full sm:w-auto sm:space-y-2">
                  <h1 className="text-Davy-Grey text-lg font-semibold">
                    Build a Web3 AI marketplace
                  </h1>
                  <h4 className="text-Davy-Grey text-base font-normal">
                    225% up to AU$ 5,000
                    <br />
                    jhgfjjhghjkkkhg hdhhrrhrh
                    <br />
                    jhgfjjhghjkkkhg
                  </h4>

                  <div className="flex items-center justify-between sm:justify-start space-x-2">
                    <div className="flex items-center space-x-2">

                      <div className="rounded-full bg-Ghost-White shadow-3xl p-2 cursor-pointer">
                        <svg
                          width="27"
                          height="31"
                          viewBox="0 0 27 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6154 29.8334V24.5573C18.6635 23.9072 18.5809 23.2537 18.3731 22.6401C18.1653 22.0266 17.8371 21.4672 17.4102 20.999C21.4359 20.5218 25.6667 18.8994 25.6667 11.4556C25.6663 9.55213 24.9778 7.72168 23.7436 6.34307C24.328 4.67776 24.2867 2.83703 23.6282 1.20328C23.6282 1.20328 22.1154 0.726107 18.6154 3.22102C15.6769 2.37414 12.5795 2.37414 9.64102 3.22102C6.14102 0.726107 4.6282 1.20328 4.6282 1.20328C3.9697 2.83703 3.92838 4.67776 4.51281 6.34307C3.26938 7.7319 2.58015 9.5789 2.58973 11.4965C2.58973 18.8858 6.8205 20.5082 10.8461 21.0399C10.4243 21.5034 10.099 22.0561 9.89141 22.6621C9.68378 23.2682 9.59846 23.9139 9.64102 24.5573V29.8334M9.64102 25.7434C3.23076 27.7884 3.23076 22.335 0.666656 21.6534L9.64102 25.7434Z"
                            stroke="#006ED4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="rounded-full bg-Ghost-White shadow-3xl p-2 cursor-pointer">
                        <svg
                          width="27"
                          height="31"
                          viewBox="0 0 27 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6154 29.8334V24.5573C18.6635 23.9072 18.5809 23.2537 18.3731 22.6401C18.1653 22.0266 17.8371 21.4672 17.4102 20.999C21.4359 20.5218 25.6667 18.8994 25.6667 11.4556C25.6663 9.55213 24.9778 7.72168 23.7436 6.34307C24.328 4.67776 24.2867 2.83703 23.6282 1.20328C23.6282 1.20328 22.1154 0.726107 18.6154 3.22102C15.6769 2.37414 12.5795 2.37414 9.64102 3.22102C6.14102 0.726107 4.6282 1.20328 4.6282 1.20328C3.9697 2.83703 3.92838 4.67776 4.51281 6.34307C3.26938 7.7319 2.58015 9.5789 2.58973 11.4965C2.58973 18.8858 6.8205 20.5082 10.8461 21.0399C10.4243 21.5034 10.099 22.0561 9.89141 22.6621C9.68378 23.2682 9.59846 23.9139 9.64102 24.5573V29.8334M9.64102 25.7434C3.23076 27.7884 3.23076 22.335 0.666656 21.6534L9.64102 25.7434Z"
                            stroke="#006ED4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                    </div>
                    <a
                      href="/"
                      className="bg-Chinese-Blue text-Pure-White rounded-lg text-xs py-0.5 px-2"
                    >
                      view on explorer
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col max-w-xs mx-auto sm:max-w-none sm:flex-row items-center space-y-2 sm:space-y-0 text-right sm:text-left sm:space-x-6">
                <div className="flex w-full sm:w-auto justify-between sm:justify-start items-center space-x-8 sm:space-x-2">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 21C15.7218 21 13.875 19.1532 13.875 16.875C13.875 14.5968 15.7218 12.75 18 12.75C19.8882 12.75 21.48 14.0186 21.9697 15.75H21C20.3787 15.75 19.875 16.2537 19.875 16.875C19.875 17.4963 20.3787 18 21 18H21.9697C21.48 19.7314 19.8882 21 18 21Z"
                      fill="#43489D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.97383 8.18497C10.5816 8.04877 13.5121 7.875 18 7.875C22.4879 7.875 25.4184 8.04877 27.0262 8.18497C27.4515 8.22097 27.7566 8.52562 27.7977 8.93362C27.8644 9.59625 27.9377 10.4876 27.998 11.625H27C26.3787 11.625 25.875 12.1287 25.875 12.75C25.875 13.3713 26.3787 13.875 27 13.875H28.0865C28.1105 14.7727 28.125 15.7712 28.125 16.875C28.125 17.9788 28.1105 18.9773 28.0865 19.875H27C26.3787 19.875 25.875 20.3787 25.875 21C25.875 21.6213 26.3787 22.125 27 22.125H27.998C27.9377 23.2625 27.8644 24.1538 27.7977 24.8164C27.7566 25.2244 27.4515 25.529 27.0262 25.565C25.4184 25.7012 22.4879 25.875 18 25.875C13.5121 25.875 10.5816 25.7012 8.97383 25.565C8.5485 25.529 8.2434 25.2244 8.2023 24.8164C8.0547 23.3509 7.875 20.7673 7.875 16.875C7.875 12.9827 8.0547 10.3991 8.2023 8.93362C8.2434 8.52562 8.5485 8.22097 8.97383 8.18497ZM18 23.25C21.5208 23.25 24.375 20.3958 24.375 16.875C24.375 13.3542 21.5208 10.5 18 10.5C14.4792 10.5 11.625 13.3542 11.625 16.875C11.625 20.3958 14.4792 23.25 18 23.25Z"
                      fill="#43489D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.875 32.4754C23.7557 32.5628 21.1439 32.625 18 32.625C14.8561 32.625 12.2443 32.5628 10.125 32.4754V33C10.125 34.0355 9.28552 34.875 8.25 34.875C7.21447 34.875 6.375 34.0355 6.375 33V32.2662C6.28418 32.2596 6.1952 32.253 6.10803 32.2465C3.64838 32.0609 1.72288 30.1833 1.51412 27.7113C1.32046 25.418 1.125 21.8671 1.125 16.875C1.125 11.8829 1.32046 8.33198 1.51412 6.03871C1.72288 3.56674 3.64838 1.68913 6.10803 1.50355C8.55945 1.31861 12.4507 1.125 18 1.125C23.5493 1.125 27.4406 1.3186 29.8919 1.50355C32.3516 1.68912 34.2771 3.56673 34.4859 6.03871C34.6796 8.33198 34.875 11.8829 34.875 16.875C34.875 21.8671 34.6796 25.418 34.4859 27.7113C34.2771 30.1833 32.3516 32.0609 29.892 32.2465C29.8426 32.2502 29.7926 32.2539 29.742 32.2577C29.7034 32.2605 29.6644 32.2633 29.625 32.2662V33C29.625 34.0355 28.7855 34.875 27.75 34.875C26.7145 34.875 25.875 34.0355 25.875 33V32.4754ZM30.2511 22.125C30.1879 23.3532 30.1092 24.319 30.0364 25.0418C29.8851 26.5441 28.704 27.6809 27.2162 27.807C25.5398 27.949 22.5457 28.125 18 28.125C13.4544 28.125 10.4602 27.949 8.78385 27.807C7.29603 27.681 6.11491 26.5441 5.96362 25.0418C5.80789 23.4954 5.625 20.8363 5.625 16.875C5.625 12.9137 5.80789 10.2546 5.96362 8.70817C6.11491 7.20592 7.29602 6.06904 8.78385 5.94299C10.4602 5.80098 13.4543 5.625 18 5.625C22.5456 5.625 25.5398 5.80098 27.2162 5.94299C28.704 6.06904 29.8851 7.20592 30.0364 8.70817C30.1092 9.43095 30.1879 10.3968 30.2511 11.625H30.75C31.3713 11.625 31.875 12.1287 31.875 12.75C31.875 13.3713 31.3713 13.875 30.75 13.875H30.3373C30.3609 14.7775 30.375 15.7762 30.375 16.875C30.375 17.9738 30.3609 18.9725 30.3373 19.875H30.75C31.3713 19.875 31.875 20.3787 31.875 21C31.875 21.6213 31.3713 22.125 30.75 22.125H30.2511Z"
                      fill="#43489D"
                    />
                  </svg>
                  <div className="text-Light-Slate-Gray">
                    <h4 className="font-medium">Contract Balance </h4>
                    <h2 className="font-bold">700 USDT</h2>
                  </div>
                </div>

                <div className="flex w-full sm:w-auto justify-between sm:justify-start items-center space-x-8 sm:space-x-2">
                  <svg
                    onClick={() => { setIsUserVoted(!isUserVoted); }}
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6734 11.3778C12.7109 13.8622 12.7501 17.4109 12.7501 21.3751C12.7501 26.656 12.6804 31.1998 12.6382 33.4721C13.0889 33.5376 13.5665 33.604 14.0678 33.6699C17.6517 34.141 22.4646 34.5882 27.3542 34.485C29.5677 34.4383 31.686 33.1964 32.4885 31.0221C34.4866 25.6083 34.6108 18.7003 34.4501 14.4575C34.3476 11.7507 32.0715 9.72351 29.3798 9.88686C27.7456 9.98609 25.9679 10.1345 23.9883 10.3165C24.0146 9.08871 23.9998 7.75709 23.9056 6.43977C23.7742 4.60385 22.8156 2.64614 20.8103 2.04179C20.0977 1.82704 19.3763 1.69739 18.737 1.61895C17.0074 1.40678 15.594 2.61648 15.1388 4.14094C14.5633 6.06812 13.6485 8.95904 12.6734 11.3778Z"
                      fill={isUserVoted ? "#43489D" : "#ADADAD"}
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.67456 34.606C4.30883 34.7581 5.09203 34.875 6 34.875C6.90797 34.875 7.69117 34.7581 8.32545 34.606C9.96292 34.2136 10.7429 32.701 10.7741 31.3256C10.8164 29.4687 10.875 26.2228 10.875 22.5C10.875 18.7772 10.8164 15.5313 10.7741 13.6744C10.7429 12.299 9.96292 10.7863 8.32545 10.3939C7.69117 10.2419 6.90797 10.125 6 10.125C5.09203 10.125 4.30883 10.2419 3.67456 10.3939C2.0371 10.7863 1.25714 12.299 1.22584 13.6744C1.1836 15.5313 1.125 18.7772 1.125 22.5C1.125 26.2228 1.1836 29.4687 1.22584 31.3256C1.25714 32.701 2.0371 34.2136 3.67456 34.606ZM7.5 27.75C7.5 26.9216 6.82843 26.25 6 26.25C5.17157 26.25 4.5 26.9216 4.5 27.75V29.25C4.5 30.0784 5.17157 30.75 6 30.75C6.82843 30.75 7.5 30.0784 7.5 29.25V27.75Z"
                      fill={isUserVoted ? "#43489D" : "#ADADAD"}
                    />
                  </svg>

                  <div className="text-Light-Slate-Gray relative">
                    <h4 className="font-medium">Total Votes</h4>
                    <h2 className="font-bold">700 (20%) </h2>
                    {
                      isUserVoted &&
                      <p
                        className="bg-Spring-Frost absolute top-1 -left-14 sm:left-auto sm:-right-14 text-Pure-Black rounded-lg text-xs py-0.5 px-2"
                      >voted
                      </p>
                    }
                  </div>
                </div>
              </div>

              <div className="flex items-center flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="bg-Eire-Black w-full sm:w-auto flex-1 rounded-xl py-2 px-4 flex items-center justify-between">
                  <h2 className="text-Pure-White/60 flex-1 ">Withdraw Request</h2>
                  <input className="bg-Eire-Black text-Pure-White outline-none w-14 sm:w-16 text-right" placeholder="0" />
                </div>
                <button
                  onClick={() => {
                    setShowDetailsModal(true);
                  }}
                  className="flex-1 bg-gradient-to-r w-full sm:w-auto from-Chinese-Blue to-Celestial-Blue text-Pure-White rounded-xl py-2"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block max-w-xs w-full  sticky top-18 right-0 self-start	">
          <Contributers heading="All Contributors" />
        </div>
      </div>
    </>
  );
};

export default WidthdrawRequest;
