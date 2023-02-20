import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ lightsOff, lightsOn, lights }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions lightsOff={lightsOff} lightsOn={lightsOn} lights={lights} />
    </>
  );
}
