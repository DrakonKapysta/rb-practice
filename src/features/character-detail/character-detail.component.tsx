"use client";

import { useRickAndMortyCharacterQuery } from "@/entities/api/rick-and-morty";
import { CardBody, CardHeader } from "@heroui/react";
import { ICharacterDetailProps } from "./character-detail.interface";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Spinner } from "@/shared";
import { FailedLoad } from "@/shared/ui/failed-load";
import { getStatusColor } from "@/shared/lib";

export const CharacterDetail = ({ characterId }: ICharacterDetailProps) => {
  const {
    data: character,
    isLoading,
    error,
  } = useRickAndMortyCharacterQuery(characterId);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <FailedLoad
        message="Failed to load character details. Please try again."
        back={
          <Button as={Link} href="/" color="default" variant="flat">
            Back to Characters
          </Button>
        }
      />
    );
  }

  if (!character) {
    return (
      <FailedLoad message="Character not found." className="text-default-500" />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button as={Link} href="/" color="default" variant="flat">
          ← Back to Characters
        </Button>
        <h1 className="text-3xl font-bold">{character.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Basic Information</h3>
            </CardHeader>
            <CardBody className="space-y-3">
              <div className="flex justify-between">
                <span className="text-default-500">Status:</span>
                <span
                  className={`font-medium ${getStatusColor(character.status)}`}
                >
                  {character.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-default-500">Species:</span>
                <span className="font-medium">{character.species}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-default-500">Type:</span>
                <span className="font-medium">
                  {character.type || "Unknown"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-default-500">Gender:</span>
                <span className="font-medium">{character.gender}</span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Location Information</h3>
            </CardHeader>
            <CardBody className="space-y-3">
              <div>
                <span className="text-default-500 block">Origin:</span>
                <span className="font-medium">{character.origin.name}</span>
              </div>
              <div>
                <span className="text-default-500 block">
                  Current Location:
                </span>
                <span className="font-medium">{character.location.name}</span>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Episodes</h3>
            </CardHeader>
            <CardBody>
              <p className="text-default-500">
                This character appears in {character.episode.length} episode(s)
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
