// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { config } from 'npm:dotenv';

// Load environment variables from .env file
config();

const CLOUDFLARE_API_TOKEN = Deno.env.get('CLOUDFLARE_API_TOKEN');
const CLOUDFLARE_ACCOUNT_ID = Deno.env.get('CLOUDFLARE_ACCOUNT_ID');

if (!CLOUDFLARE_API_TOKEN) {
	console.error('❌ CLOUDFLARE_API_TOKEN is not set');
	Deno.exit(1);
}

if (!CLOUDFLARE_ACCOUNT_ID) {
	console.error('❌ CLOUDFLARE_ACCOUNT_ID is not set');
	Deno.exit(1);
}

// Get environment argument (preview or production)
const environment = Deno.args[0] || 'preview';

if (environment !== 'preview' && environment !== 'production') {
	console.error("❌ Invalid environment. Use 'preview' or 'production'");
	Deno.exit(1);
}

console.log(`🚀 Deploying to ${environment}...`);
const branch = environment === 'production' ? 'main' : 'preview';
// Run wrangler pages deploy
const command = new Deno.Command('deno', {
	args: [
		'run',
		'-A',
		'npm:wrangler',
		'pages',
		'deploy',
		'.svelte-kit/cloudflare',
		'--branch',
		branch
	],
	env: {
		CLOUDFLARE_API_TOKEN,
		CLOUDFLARE_ACCOUNT_ID
	},
	stdout: 'inherit',
	stderr: 'inherit'
});

const { code } = await command.output();

if (code === 0) {
	console.log(`✅ Successfully deployed to ${environment}`);
} else {
	console.error(`❌ Deployment failed with exit code ${code}`);
	Deno.exit(code);
}
