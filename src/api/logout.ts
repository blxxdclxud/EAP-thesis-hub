import { NextRequest } from 'next/server';
import Cookies from 'js-cookie';

function Logout(req: NextRequest): void {
	req.cookies.clear();
	Cookies.remove('id');
	Cookies.remove('token');
}

export default Logout;
