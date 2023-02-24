"use client";

import { definePreview } from "next-sanity/preview";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

function onPublicAccessOnly() {
  throw new Error("Unable to laod preview as you are not logged in");
}

if (!projectId || !dataset) {
  throw new Error("Missing projectId or dataset. Check your .env files");
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
