import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "hb46r5q9",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skjgcSiE9J6VgxPFs2Nn7oi3jKPXBeBrpG0GsfGKF4sPZsJgpWn1apa1utxGqkUQ0fdn82jFBWNPZiTKxF87kiUJgpYDZqjsLGPUV2pJtfrfAArWDn7k4SWAVNM2oEzJTpNRzUvJYgwSRMCUeMwJtUHGZ1goBY7bcEsATILY218zGYTFjfuV",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
