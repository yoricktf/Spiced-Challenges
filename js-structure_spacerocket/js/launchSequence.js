// Implement the launch sequence function here and export it as the default export.
// import { launch } from "./core/protocol";
import { loadPayload } from "./core/load";
import { NFSAT } from "./payload/satellites";
import { FISHSAT } from "./payload/satellites";
import { fuel } from "./core/fuel";
import { countdown } from "./core/countdown";
import { liftoff } from "./core/liftoff";
import { deployPayload } from "./core/deploy";

function launch() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  countdown();
  countdown();
  countdown();
  countdown();
  countdown();
  liftoff();
  deployPayload();
}

export default launch;
