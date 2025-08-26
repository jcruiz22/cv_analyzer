import { type FormEvent, useState } from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import FileUploader from "~/components/FileUploader";
import Navbar from "~/components/Navbar";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState(
    "Upload your resume to get started"
  );
  const [file, setFile] = useState<File | null>(null);
  const handleFileSelect = (file: File | null) => {
    setFile(file);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    if (!form) return;
    const formData = new FormData(form);
    const companyName = formData.get("company-name") as string;
    const jobTitle = formData.get("job-title") as string;
    const jobDescription = formData.get("job-description") as string;

    console.log('upload:',{ companyName, jobTitle, jobDescription, file });
    
  };

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart feedback for your dream job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img src="public/images/resume-scan-2.gif" className="w-full" />
            </>
          ) : (
            <h2>Drop your resume for improvements tips powered by AI</h2>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-8"
            >
              <div className="form-div">
                <label htmlFor="company-name" className="pl-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  placeholder="Company Name"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-title" className="pl-1">
                  Job Title
                </label>
                <input
                  type="text"
                  id="job-title"
                  name="job-title"
                  placeholder="Job Title"
                />
              </div>
              <div className="form-div">
                <label htmlFor="job-description" className="pl-1">
                  Job Description
                </label>
                <textarea
                  rows={5}
                  id="job-description"
                  name="job-description"
                  placeholder="Job Description"
                />
              </div>
              <div className="form-div">
                <label htmlFor="uploader" className="pl-1">
                  Upload Resume
                </label>
                <FileUploader onFileSelect={handleFileSelect} />
              </div>
              <button className="primary-button" type="submit">
                Upload Resume
              </button>
              <p className="text-sm text-gray-500 pl-1">
                We accept PDF, DOCX, and TXT files.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
