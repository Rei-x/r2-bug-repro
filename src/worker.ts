/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	MY_BUCKET: R2Bucket;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const uploadFile = await env.MY_BUCKET.put('file', 'content');

		const getFile = await env.MY_BUCKET.get('file');

		return new Response(
			JSON.stringify({
				uploadFile: uploadFile.checksums,
				getFile: getFile?.checksums,
			}),
			{
				status: 200,
				headers: {
					'content-type': 'application/json',
				},
			}
		);
	},
};
