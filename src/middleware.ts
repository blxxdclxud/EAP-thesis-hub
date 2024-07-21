import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const skipRoutes: string[] = ['/login', '/signup'];
const availableForGuest: string[] = ['/', '/login', '/signup'];

export async function middleware(req: NextRequest): Promise<NextResponse> {
	const token: string = req.cookies.get('token')?.value || '';

	// req.cookies.clear();
	// return ;

	console.log(req.nextUrl.pathname);
	console.log(token);

	if (!token) {
		if (availableForGuest.includes(req.nextUrl.pathname)) {
			return NextResponse.next();
		}
		return NextResponse.redirect(new URL('/login', req.url));
	}

	if (skipRoutes.includes(req.nextUrl.pathname)) {
		return NextResponse.redirect(new URL('/students', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/login', '/signup', '/students/:path*', '/'], // Adjust the paths you want to protect
};
