import { Logo } from "./components/Logo";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-130px)] w-full items-center justify-center">
      <Logo size="xl" />
    </div>
  );
}
