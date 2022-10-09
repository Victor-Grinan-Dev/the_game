import { Terrain } from "../classes/terrain";

const plains = new Terrain("plains", 1, 0, 0, false, false, true, [], null);
const hills = new Terrain("hills", 2, 1, 1, true, true, true, [], "vision+1");
const forest = new Terrain("forest", 2, 1, 2, true, true, false, [], "luck+4");
const swamps = new Terrain("swamps", 1, 2, -1, false, false, false, [], "luck+9");
const mountains = new Terrain("mountains", 5, 5, 3, true, true, false, [], null);

export const terrainTypes = {
  plains: plains,
  hills: hills,
  forest: forest,
  swamps: swamps,
  mountains: mountains
}