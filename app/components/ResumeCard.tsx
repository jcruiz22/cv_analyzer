import React from 'react';
import { RiEyeLine, RiStarLine } from 'react-icons/ri';
import CompanyIcon from './CompanyIcon';

const ResumeCard = ({ resume }: { resume: Resume }) => {
    return (
        <div className="resume-card">
            <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-xl font-semibold">{resume.jobTitle}</h2>
                <div className="flex items-center gap-2">
                    <CompanyIcon
                        companyName={resume.companyName || 'Unknown Company'}
                        size={20}
                        className="flex-shrink-0"
                    />
                    <p className="text-gray-600">{resume.companyName}</p>
                </div>
            </div>

            <a href={resume.resumePath} className="primary-button flex items-center gap-2 justify-center">
                <RiEyeLine size={20} />
                View Resume
            </a>

            <div className="feedback mt-4">
                <h4 className="flex items-center gap-2">
                    <RiStarLine size={18} />
                    Feedback
                </h4>
                <p>Overall Score: {resume.feedback.overallScore}%</p>
            </div>
        </div>
    );
};

export default ResumeCard;