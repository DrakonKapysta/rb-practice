"use client";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import Link from "next/link";
import { getStatusColor } from "@/shared/lib";
import { ICharacterCardProps } from "./character-card.interface";
import { useEffect, useState } from "react";
import { useVisitedCharacters } from "@/shared";

export const CharacterCard = ({
  character,
  isPriority,
}: ICharacterCardProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const addVisitedCharacter = useVisitedCharacters(
    (state) => state.addVisitedCharacter
  );
  const isVisited = useVisitedCharacters((state) => state.isVisited);

  const hasVisited = isMounted && isVisited(character.id);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
            priority={isPriority}
            loading={isPriority ? undefined : "lazy"}
            unoptimized={false}
          />
        </div>
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-large line-clamp-2">
            {character.name}
          </h4>
          {hasVisited && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Visited
            </span>
          )}
        </div>
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
            onNavigate={() => {
              addVisitedCharacter(character);
            }}
          >
            View Details →
          </Link>
        </div>
      </CardBody>
    </Card>
  );
};
