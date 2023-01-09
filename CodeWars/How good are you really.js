function betterThanAverage(classPoints, yourPoints) {
    const allPoints = classPoints.concat(yourPoints);
    let sum = 0;
    for (let i = 0; i < allPoints.length; i++) {
        sum += allPoints[i];
    }
    if (sum / allPoints.length < yourPoints) return true;
    return false;
}

/*
CodeWars decision
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
 */