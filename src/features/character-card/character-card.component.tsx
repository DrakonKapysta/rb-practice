import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";
import { getStatusColor } from "@/shared/lib";
import { ICharacterCardProps } from "./character-card.interface";

export const CharacterCard = ({ character }: ICharacterCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="relative w-full h-48 mb-2">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <h4 className="font-bold text-large line-clamp-2">{character.name}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-small text-default-500">Status:</span>
            <span
              className={`text-small font-medium ${getStatusColor(
                character.status
              )}`}
            >
              {character.status}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-small text-default-500">Species:</span>
            <span className="text-small font-medium">{character.species}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-small text-default-500">Gender:</span>
            <span className="text-small font-medium">{character.gender}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-small text-default-500">Origin:</span>
            <span className="text-small font-medium line-clamp-1">
              {character.origin.name}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <Link
            href={`/character/${character.id}`}
            className="text-primary text-small font-medium hover:underline"
          >
            View Details →
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};
