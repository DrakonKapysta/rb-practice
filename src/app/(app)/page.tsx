import { CharactersModule } from "@/modules";
import { Spinner } from "@/shared";
import { Suspense } from "react";

export const revalidate = 30;

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-screen">
              <Spinner />
            </div>
          }
        >
          <CharactersModule />
        </Suspense>
      </div>
    </div>
  );
}
