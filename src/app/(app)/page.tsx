import { CharactersModule } from "@/modules";

export const revalidate = 30;

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <CharactersModule />
      </div>
    </div>
  );
}
