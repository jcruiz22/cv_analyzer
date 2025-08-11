import CompanyIcon from './CompanyIcon';
import { Link } from 'react-router';
import ScoreCircle from './ScoreCircle';

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    return (

        <Link to={`/resumes/${id}`} className='resume-card animate-in fade-in duration-1000'>
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {companyName && <div className="flex items-center gap-2">
                        <h2 className='!text-black font-bold break-words'>{companyName}</h2>
                        <CompanyIcon companyName={companyName} size={20} className="flex-shrink-0" />
                    </div>}
                    {jobTitle && <h3 className='text-lg break-words text-gray-500'>{jobTitle}</h3>}
                    {!companyName && !jobTitle && <h2 className='!text-black font-bold'>Unknown Job Title</h2>}
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback?.overallScore || 0} />
                </div>
            </div>
            {imagePath && (
                <div className="gradient-border animate-in fade-in duration-1000">
                    <div className="w-full h-full">
                        <img
                            src={imagePath}
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover rounded-lg object-top"
                        />
                    </div>
                </div>
            )}
        </Link>
    );
};

export default ResumeCard;