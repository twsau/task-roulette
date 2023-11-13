import { TaskList } from "@/components/TaskList";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpinLink } from "@/components/SpinLink";

export default function Home() {
  return (
    <>
      <Header />
      <TaskList />
      <Footer>
        <SpinLink />
      </Footer>
    </>
  );
}
