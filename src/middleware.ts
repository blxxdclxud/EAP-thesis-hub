// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Cookies from 'js-cookie';

export async function middleware(req: NextRequest): Promise<NextResponse> {
	const token: string = req.cookies.get('token')?.value || '';

	// req.cookies.clear();
	// return ;

	console.log(req.nextUrl.pathname);
	console.log(token);
	if (req.nextUrl.pathname === '/logout') {
		// req.cookies.delete();
		Cookies.remove('id');
		Cookies.remove('token');
		console.log(req.cookies.get('token')?.value || '');
		return NextResponse.redirect(new URL('/login', req.url));
	}

	if (!token) {
		if (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup') {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', req.url));
	}

	// const user = await getStudentByToken(token);
	//
	// if (!user) {
	//     console.log("NOUSER", user)
	//     return NextResponse.redirect(new URL('/login', req.url));
	// }

	if (req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/signup') {
		return NextResponse.redirect(new URL('/students', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/login', '/signup', '/students/:path*', '/logout'], // Adjust the paths you want to protect
};
