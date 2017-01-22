import { version } from '../../package.json';
import { Router } from 'express';
import ride from './ride';

export default ({ config, db }) => {
	let api = Router();

	api.use('/ride', ride({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
