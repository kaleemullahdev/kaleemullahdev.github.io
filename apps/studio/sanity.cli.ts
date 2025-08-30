import { defineCliConfig } from 'sanity/cli';
import { projectId, dataset } from 'sanity-shared/config';

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  autoUpdates: true,
  /**
   * TypeGen configuration
   */
});
