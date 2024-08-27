import ExamTitle from "@/components/ExamTitle";
import ScoreBoard from "@/components/ScoreBoard";

export default function Home() {
  return (
    <main className="p-24 sm:p-4">
      <ExamTitle />
      <ScoreBoard />
    </main>
  );
}
