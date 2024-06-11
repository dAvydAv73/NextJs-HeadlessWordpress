import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));

  const assignId = (b) => {
    b.forEach((block) => {
      block.id = uuid();
      if (block.attributes?.url) {
        block.attributes.url = block.attributes.url.replace("https", "http");
      }
      if (block.innerBlocks?.length) {
        assignId(block.innerBlocks);
      }
    });
  };

  assignId(blocks);

  return blocks;
};