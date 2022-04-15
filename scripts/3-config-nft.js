import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xBc1A3561bEbf63e47BB1bD510aADd47e48853168");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Leaf Village Headband",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/metamask.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();