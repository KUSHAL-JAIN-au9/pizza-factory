export const CalculateTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;
  const showminutes = `${minutes
    .toString()
    .padStart(2, "0")}min ${displaySeconds.toString().padStart(2, "0")}sec `;

  const showseconds = `${displaySeconds.toString().padStart(2, "0")}sec `;

  return minutes > 0 ? showminutes : showseconds;
  //   const res = { time: minutes > 0 ? showminutes : showseconds, seconds };
};

function calculateTotalTime(times) {
  // Convert all times to seconds
  const timesInSeconds = times.map((time) => {
    const [minutes, , seconds] = time.split(" ");
    return parseInt(minutes) * 60 + parseInt(seconds);
  });

  // Calculate total time in seconds
  const totalSeconds = timesInSeconds.reduce(
    (total, seconds) => total + seconds,
    0
  );

  // Convert total time back to minutes and seconds
  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${totalMinutes} min ${remainingSeconds} sec`;
}

// Usage:
const times = ["2 min 30 sec", "1 min 20 sec", "3 min 10 sec"];
console.log(calculateTotalTime(times)); // Outputs: "7 min 0 sec"
