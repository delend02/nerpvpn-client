import { stackMiddlewares } from './middlewares/stackMiddlewares'
import { withI18n } from './middlewares/withI18n'

const middlewares = [withI18n]
export default stackMiddlewares(middlewares)

export const config = {
	matcher: '/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
}
