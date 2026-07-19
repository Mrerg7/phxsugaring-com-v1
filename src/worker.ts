export default {
  async fetch(request: Request, env: { ASSETS: { fetch: (req: Request) => Promise<Response> } }) {
    const url = new URL(request.url);

    if (url.hostname === 'www.phxsugaring.com') {
      url.hostname = 'phxsugaring.com';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
