import { SITE, METADATA } from 'astrowind:config';

// Returns basic Blog app settings such as name and description derived from the main site configuration.
export const getAppBlogSettings = () => {
  return {
    name: SITE?.name,
    description: METADATA?.description,
  } as { name?: string; description?: string };
};

// Re-export `getCanonical` helper from the permalink utilities so existing imports continue to work.
export { getCanonical } from './permalinks'; 