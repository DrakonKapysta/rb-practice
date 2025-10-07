import { Characters } from "@/widgets";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <Characters />
      </div>
    </div>
  );
}

export const revalidate = 30;
