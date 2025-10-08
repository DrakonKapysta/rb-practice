import { Card, CardBody, CardHeader } from "@heroui/react";
import { ICharacter } from "@/entities";

interface IEpisodesInformationProps {
  character: ICharacter;
}

export const EpisodesInformation = ({
  character,
}: IEpisodesInformationProps) => {
  return (
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
  );
};
