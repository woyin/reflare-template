import useReflare from 'reflare';

export default {
  async fetch(
    request: Request,
  ): Promise<Response> {
    const reflare = await useReflare();

    reflare.push({
      path: '/*',
      upstream: {
        domain: 'httpbingo.org',
        protocol: 'https',
      },
    });

    return reflare.handle(request);
  },
};
