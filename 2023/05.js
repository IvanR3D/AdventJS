function cyberReindeer(road, time) {
  const roadMap = [road];
  let sled = road.indexOf("S");
  let state = ".";

  for (let i = 1; i < time; i++) {
    if (i === 5) {
      road = road.replaceAll("|", "*");
    }
    if (road[sled + 1] != "|") {
      sled++;
      road = road.split("");
      road.splice(sled - 1, 1, state);
      state = road.splice(sled, 1, "S");
      road = road.join("");
    }
    roadMap.push(road);
  }
  return roadMap;
}