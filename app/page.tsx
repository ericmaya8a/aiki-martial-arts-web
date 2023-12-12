import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { constants } from "./constants";

export default function Home() {
  return (
    <div className="container">
      <div className="p-4 pt-2">{constants.appName}</div>
      <ThemeSwitcher />
    </div>
  );
}
