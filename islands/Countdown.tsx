import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

// target date is passed as string, not date, cuz serializeable
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target);
  const now = useSignal(new Date());

  // update `now` every second so long as component mounted
  useEffect(() => {
    const timer = setInterval(() => {
      if (now.value > target) {
        clearInterval(timer);
      }
      now.value = new Date();
    }, 1000);
    return () => clearInterval(timer);
  }, [props.target]);

  const secondsLeft = Math.floor(
    (target.getTime() - now.value.getTime()) / 1000,
  );

  // if target date has passed, stop counting down
  if (secondsLeft < 0) {
    return <span>🎉</span>;
  }
  // otherwise render formatted time
  return (
    <span>
      {timeFmt.format(secondsLeft, "seconds")}
    </span>
  );
}
