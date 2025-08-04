import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";
import { resumes } from "../../constants";
import ResumeCard from "../components/ResumeCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CV Analyzer" },
    { name: "description", content: "Analyze your CV with our tool!" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading">
          <h1>Track Your Application & Resume Ratings</h1>
          <h2>Get insights and improve your chances of success through AI!</h2>
        </div>
        {resumes?.map((resume: any) => (
          <ResumeCard key={resume.id} resume={resume} />
        )) || <p>No resumes found.</p>}
      </section>
    </main>
  );
}