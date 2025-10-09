import { MetadataRoute } from 'next'

// robots
const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      disallow: ['/', '/admin', '/api', '/graphql'],
    },
  }
}

export default robots
