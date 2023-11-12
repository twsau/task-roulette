import { Menu } from "./Menu";
import { NewTask } from "./NewTask";

export const Header: React.FC = () => (
  <header className="flex items-center gap-3 p-5">
    <Menu />
    <NewTask />
  </header>
);
