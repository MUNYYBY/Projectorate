import { Drawer, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { BiCloudDownload, BiCloudUpload } from "react-icons/bi";
import { SetTicketWorkSubmission, UploadWork } from "../../../client/requests";

export default function Submit(props) {
  const [work, setWork] = useState(null);
  const [loading, setLoading] = useState(false);
  const hiddenFileInput = useRef(null);
  const handleChooseFileBtn = (event) => {
    hiddenFileInput.current.click();
  };
  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    setWork(e.target.files[0]);
  };

  useEffect(() => {
    if (work) {
      setLoading(true);
      UploadWork(work)
        .then((res) => {
          console.log(res);
          if (!res.error) {
            const workName = res.data.newName;
            const payload = {
              work: workName,
              ticketId: props.ticketId,
            };
            SetTicketWorkSubmission(payload).then((res) => {
              console.log(res);
              if (res.data) {
                setLoading(false);
                message.success(`Work has been submitted!`);
                props.setIsSubmitWork(false);
              } else {
                message.error(`Error while submitting work`);
                setLoading(false);
              }
            });
          } else {
            message.error(`Error while uploading work`);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [work]);
  return (
    <Drawer
      title="Submit Work"
      onClose={() => props.setIsSubmitWork(false)}
      open={props.isSubmitWork}
      bodyStyle={{ paddingBottom: 80 }}
    >
      <div className="flex flex-col">
        <h1 className="text-sm">
          Please verify your work before submission. After uploading your
          submission can not be changed. You can only have multiple revisions of
          your work. <br /> Note: If you have multiple files to submit kindly
          zip it in to a single file.
        </h1>
        <button
          className="bg-gray-400 rounded-sm py-2 mt-4 flex justify-center"
          onClick={() => handleChooseFileBtn()}
          disabled={loading}
        >
          {loading ? (
            <svg
              class="animate-spin -ml-1 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              {" "}
              <BiCloudUpload size={20} color="black" />
              <p className="text-black ml-2 font-semibold">Submit Work</p>
            </>
          )}
        </button>
        <input
          type="file"
          className="hidden"
          multiple={false}
          placeholder="Choose file"
          ref={hiddenFileInput}
          onChange={handleFileInputChange}
        />
      </div>
    </Drawer>
  );
}
