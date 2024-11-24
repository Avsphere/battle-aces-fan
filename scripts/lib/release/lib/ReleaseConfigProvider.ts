import assert from "node:assert";
import "jsr:@std/dotenv/load";

export const ReleaseConfigProvider = {
  get config() {
    const artifactRegistry = Deno.env.get("ARTIFACT_REGISTRY");
    assert(artifactRegistry, "ARTIFACT_REGISTRY is required");

    const gcloudServiceName = Deno.env.get("GCLOUD_SERVICE_NAME");
    assert(gcloudServiceName, "GCLOUD_SERVICE_NAME is required");

    return {
        artifactRegistry,
        gcloudServiceName
    };
  },
};
