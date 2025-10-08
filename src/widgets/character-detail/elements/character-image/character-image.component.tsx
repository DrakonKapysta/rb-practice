import { Card, CardHeader } from "@heroui/react";
import Image from "next/image";
import { ICharacter } from "@/entities";

interface ICharacterImageProps {
  character: ICharacter;
}

export const CharacterImage = ({ character }: ICharacterImageProps) => {
  return (
    <Card>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="relative w-full h-96">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </CardHeader>
    </Card>
  );
};
