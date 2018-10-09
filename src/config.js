export const siteRoot = (() => {
  // handles conditional `siteRoot` on Netlify environment
  function getSiteRoot(context = '') {
    // get Netlify deploy urls
    switch (context) {
      default:
        return process.env.URL
      case 'production':
        return process.env.URL
      case 'branch-deploy':
      case 'deploy-preview':
        return process.env.DEPLOY_PRIME_URL
    }
  }
  return getSiteRoot(process.env.CONTEXT) || process.env.SITE_ROOT || ''
})()
