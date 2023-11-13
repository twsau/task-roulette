import { addCredit } from "@/state/actions/tasks/addCredit";
import { Button } from "../ui/button";
import { deleteTask } from "@/state/actions/tasks/deleteTask";
import { ColorWheelIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Props {
  id: string;
}

export const CashTask: React.FC<Props> = ({ id }) => (
  <Link href="/spin">
    <Button
      onClick={() => {
        addCredit();
        deleteTask(id);
      }}
    >
      <ColorWheelIcon />
    </Button>
  </Link>
);
