/**
 * Unauthenticated health endpoint for Railway (and other) healthcheckers.
 * Returns 200 if the Studio server process is alive.
 * Does NOT check the Hermes agent — that's a separate service.
 */
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/health')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({ ok: true, service: 'hermes-studio' })
      },
    },
  },
})
