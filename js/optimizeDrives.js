let optimized = false;

function optimizeDrives(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    optimized = true;
}

function driverOptimized(){
  return optimized;
}

function resetDriverOptimization(){
    document.getElementById("optimizationPercentage").innerHTML = "";
    optimized = false;
}