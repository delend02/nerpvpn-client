import { DeepType } from '@/utils/getDeepType'

export const EMPTY_VALUE = '——'

export type RoutesNamespace = `${Routes}` extends `/${infer Rest}` ? Rest : `${Routes}`
export type RoutesType = `${Routes}`

export enum Routes {
	ACCOUNT = '/account',
	DASHBOARD = '/dashboard',
	ORDERS = '/orders',
	DOCUMENTS = '/documents',
	USERS = '/users',
	EMPLOYEES = '/employees',

	// SERVICES = '/services',
	// TARIFFS = '/tariffs',
	// CONTACTS = '/contacts',
	// RECOVERY = '/recovery',
	// SURVEY = '/survey',
	// CABINET
	// CABINET = '/cabinet',
	// orders/:id
	// documents
	// CABINET_ORDERS = '/cabinet/orders',
	// CABINET_ACCOUNT = '/cabinet/account',
	// CABINET_PROFILE = '/cabinet/profile',
	// CABINET_REPORTS = '/cabinet/reports',
	// CABINET_USERS = '/cabinet/users',
	// CABINET_EMPLOYEES = '/cabinet/employees',
}

export enum LoggedOutRoutes {
	// HOME = '/',
	SIGN_IN = '/sign-in',
	CHANGE_PASSWORD = '/change-password',
}

type ServiceType = 'webauth' | 'interop' | 'webrefs'
type ControllerType =
	| 'auth'
	| 'order'
	| 'searchParameter'
	| 'pax'
	| 'supportUser'
	| 'flights'
	| 'aeroExpress'
	| 'trains'
	| 'companies'
	| 'docs'
	| 'ttsSync'
	| 'room'
	| 'bot'
	| 'message'
	| 'company'
	| 'user'
	| 'avia'
	| 'train'
	| 'elastic'
	| 'country'
	| 'city'

const buildRoute = (
	useGateway: boolean,
	version: number,
	service: ServiceType,
	controller: ControllerType,
	endpoint: string
): string => {
	const gatewayPrefix = !useGateway ? '/gateway' : ''
	return `${gatewayPrefix}/api/v${version}/${service}/${controller}/${endpoint}`
}

export const ApiRoutes = {
	webauth: {
		socket: {
			ws_chat: '/chatHub',
		},
		auth: {
			login: buildRoute(true, 1, 'webauth', 'auth', 'login'),
			recovery_password: buildRoute(true, 1, 'webauth', 'auth', 'recovery'),
			change_password: buildRoute(true, 1, 'webauth', 'auth', 'changePassword'),
			change_password_in_account: buildRoute(true, 1, 'webauth', 'auth', 'changePasswordInAccount'),
			refresh_token: buildRoute(true, 1, 'webauth', 'auth', 'refresh-token'),
			revoke_token: buildRoute(true, 1, 'webauth', 'auth', 'revoke-token'),
			logout: buildRoute(true, 1, 'webauth', 'auth', 'logout'),
			is_active_user: buildRoute(true, 1, 'webauth', 'auth', 'isActiveUser'),
			check_jwt: buildRoute(true, 1, 'webauth', 'auth', 'checkJwt'),
		},
		user: {
			get_user_by_email: buildRoute(true, 1, 'webauth', 'user', 'getUserByEmail'),
			get_user: buildRoute(true, 1, 'webauth', 'user', 'getUser'),
		},
		order: {
			get_orders: buildRoute(true, 1, 'webauth', 'order', `getClientOrders`),
			get_order_by_id: buildRoute(true, 1, 'webauth', 'order', `getOrderById`),
			create_order: buildRoute(true, 1, 'webauth', 'order', `createOrder`),
			remove_order: buildRoute(true, 1, 'webauth', 'order', `deleteOrder`),
			create_trip: buildRoute(true, 1, 'webauth', 'order', `createTrip`),
			patch_trip: buildRoute(true, 1, 'webauth', 'order', `patchTrip`),
			remove_trip: buildRoute(true, 1, 'webauth', 'order', `deleteTrip`),
			add_pax_to_trip: buildRoute(true, 1, 'webauth', 'order', `addPaxesInTrip`),
			patch_pax_in_trip: buildRoute(true, 1, 'webauth', 'order', `patchPaxContextInTrip`),
			remove_pax_from_trip: buildRoute(true, 1, 'webauth', 'order', `removePaxesFromTrip`),
			create_trip_item: buildRoute(true, 1, 'webauth', 'order', `createTripElement`),
			create_flight_item: buildRoute(true, 1, 'webauth', 'order', `createFlightElement`),
			update_flight_item: buildRoute(true, 1, 'webauth', 'order', `updateFlightElement`),
			create_train_item: buildRoute(true, 1, 'webauth', 'order', `createTrainElement`),
			update_train_item: buildRoute(true, 1, 'webauth', 'order', `updateTrainElement`),
			create_aero_express_item: buildRoute(true, 1, 'webauth', 'order', `createAeroExpressElement`),
			update_aero_express_item: buildRoute(true, 1, 'webauth', 'order', `updateAeroExpressElement`),
			patch_trip_item: buildRoute(true, 1, 'webauth', 'order', `patchTripElement`),
			patch_flight_item: buildRoute(true, 1, 'webauth', 'order', `patchFlightElement`),
			patch_train_item: buildRoute(true, 1, 'webauth', 'order', `patchTrainElement`),
			patch_aero_express_item: buildRoute(true, 1, 'webauth', 'order', `patchAeroexpressElement`),
			remove_trip_item: buildRoute(true, 1, 'webauth', 'order', `deleteTripElement`),
			synchronize_order: buildRoute(true, 1, 'webauth', 'order', `synchronize`),
			delete_flight_element: buildRoute(true, 1, 'webauth', 'order', `deleteFlightElement`),
			delete_train_element: buildRoute(true, 1, 'webauth', 'order', `deleteTrainElement`),
			delete_aero_express_element: buildRoute(
				true,
				1,
				'webauth',
				'order',
				'deleteAeroExpressElement'
			),
		},
		searchParameter: {
			get_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'getSearchParameterByUserId'
			),
			get_flight_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'getFlightSearchParameterByElementId'
			),
			get_train_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'getTrainSearchParameterByElementId'
			),
			get_aero_express_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'getAeroexpressSearchParameterByElementId'
			),
			patch_flight_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'patchFlightSearchParameter'
			),
			patch_train_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'patchTrainSearchParameter'
			),
			patch_aero_express_search_parameters: buildRoute(
				true,
				1,
				'webauth',
				'searchParameter',
				'patchAeroexpressSearchParameter'
			),
			get_order_pdf_ticket: buildRoute(true, 1, 'webauth', 'order', 'downloadTicket'),
		},
		pax: {
			is_pax_exist: buildRoute(true, 1, 'webauth', 'pax', 'isExist'),
			add_pax_passports: buildRoute(true, 1, 'webauth', 'pax', 'addPassports'),
			add_pax_bonuses: buildRoute(true, 1, 'webauth', 'pax', 'addBonuses'),
			create_pax: buildRoute(true, 1, 'webauth', 'pax', 'createPax'),
			get_paxes_by_company: buildRoute(true, 1, 'webauth', 'pax', 'getPaxesByCompany'),
			get_pax_by_code: buildRoute(true, 1, 'webauth', 'pax', 'getPaxByCode'),
		},
		support_user: {
			add_support_user: buildRoute(true, 1, 'webauth', 'supportUser', 'signup'),
			get_all_support_users: buildRoute(true, 1, 'webauth', 'supportUser', 'getSupportUsers'),
			delete_support_user: buildRoute(true, 1, 'webauth', 'supportUser', 'deleteSupportUser'),
		},

		company: {
			get_all_companies: buildRoute(true, 1, 'webauth', 'company', 'getAllCompanies'),
			get_company_with_users: buildRoute(true, 1, 'webauth', 'company', 'getCompanyWithUsers'),
		},

		ttsSync: {
			is_company_exist: buildRoute(true, 1, 'webauth', 'ttsSync', 'isCompanyExists'),
			get_company_by_code: buildRoute(true, 1, 'webauth', 'ttsSync', 'getCompany'),
			add_or_update_company: buildRoute(true, 1, 'webauth', 'ttsSync', 'addOrUpdateCompany'),
			import_company: buildRoute(true, 1, 'webauth', 'ttsSync', 'importCompany'),
			get_all_companies: buildRoute(true, 1, 'webauth', 'ttsSync', 'getAllCompanies'),
			get_company_roles: buildRoute(true, 1, 'webauth', 'ttsSync', 'getCompanyUserRoles'),
			get_company_with_users: buildRoute(true, 1, 'webauth', 'ttsSync', 'getCompanyWithUsers'),
			get_users: buildRoute(true, 1, 'webauth', 'ttsSync', 'getUsers'),
			get_user: buildRoute(true, 1, 'webauth', 'ttsSync', 'getUser'),
			get_user_roles: buildRoute(true, 1, 'webauth', 'ttsSync', 'getUserRoles'),
			get_user_roles_in_company: buildRoute(true, 1, 'webauth', 'ttsSync', 'getUserRolesInCompany'),
			add_user: buildRoute(true, 1, 'webauth', 'ttsSync', 'signup'),
			update_user: buildRoute(true, 1, 'webauth', 'ttsSync', 'updateUser'),
			add_default_company_roles: buildRoute(true, 1, 'webauth', 'ttsSync', 'addDefaultRoles'),
		},

		room: {
			get_chat_rooms: buildRoute(true, 1, 'webauth', 'room', 'getUserChatRooms'),
			get_all_chat_rooms: buildRoute(true, 1, 'webauth', 'room', 'getAllRooms'),
			close_room: buildRoute(true, 1, 'webauth', 'room', 'closeRoom'),
			create_chat_room: buildRoute(true, 1, 'webauth', 'room', 'createRoom'),
			get_chat_room_by_id: buildRoute(true, 1, 'webauth', 'room', 'getRoom'),
			connect_chat_support_user: buildRoute(true, 1, 'webauth', 'room', 'connectionSupportInRoom'),
			rating_user: buildRoute(true, 1, 'webauth', 'room', 'ratingUserResponse'),
			leave_chat: buildRoute(true, 1, 'webauth', 'room', 'leaveChat'),
			join_chat: buildRoute(true, 1, 'webauth', 'room', 'joinChat'),
		},

		message: {
			get_chat_room_messages: buildRoute(true, 1, 'webauth', 'message', 'getMessagesByRoomId'),
			send_chat_message: buildRoute(true, 1, 'webauth', 'message', 'send'),
			send_chat_file: buildRoute(true, 1, 'webauth', 'message', 'sendFile'),
			get_file: buildRoute(true, 1, 'webauth', 'message', 'getFile'),
			update_message: buildRoute(true, 1, 'webauth', 'message', 'updateMessage'),
			delete_message: buildRoute(true, 1, 'webauth', 'message', 'deleteMessage'),
		},

		bot: {
			bot_start_session: buildRoute(true, 1, 'webauth', 'bot', 'startSession'),
			bot_get_message: buildRoute(true, 1, 'webauth', 'bot', 'getMessage'),
		},
	},
	interop: {
		order: {
			send_order_to_tts: buildRoute(true, 1, 'interop', 'order', 'saveAnswer'),
			order_book: buildRoute(true, 1, 'interop', 'order', 'book'),
			order_issue: buildRoute(true, 1, 'interop', 'order', 'issueOrder'),
		},
		searchParameter: {
			is_order_issued: buildRoute(true, 1, 'interop', 'order', 'hasIssuedBso'),
			get_order_booking_details: buildRoute(true, 1, 'interop', 'order', 'getOrderBookingInfo'),
			get_order_issue_details: buildRoute(true, 1, 'interop', 'order', 'getOrderIssueDetails'),
			get_order_pdf_ticket_names: buildRoute(true, 1, 'interop', 'order', 'getPdfTicketNames'),
			get_order_pdf_ticket_archive: buildRoute(true, 1, 'interop', 'order', 'getPdfTickets'),
			get_can_order_issue: buildRoute(true, 1, 'interop', 'order', 'canIssue'),
		},
		pax: {
			get_passengers: buildRoute(true, 1, 'interop', 'pax', 'getpaxes'),
			search_passengers: buildRoute(true, 1, 'interop', 'pax', 'getPaxesByClientCodes'),
			get_passenger: buildRoute(true, 1, 'interop', 'pax', 'getPaxDetails'),
			create_passenger: buildRoute(true, 1, 'interop', 'pax', 'createPaxAndBindToCompany'),
			update_passenger: buildRoute(true, 1, 'interop', 'pax', 'updatePax'),
			bind_passenger_to_company: buildRoute(true, 1, 'interop', 'pax', 'bindPaxToCompany'),
			create_passenger_document: buildRoute(true, 1, 'interop', 'pax', 'createPaxDoc'),
			create_passenger_bonus: buildRoute(true, 1, 'interop', 'pax', 'createPaxBonus'),
			update_passenger_document: buildRoute(true, 1, 'interop', 'pax', 'updatePaxDoc'),
			update_passenger_bonus: buildRoute(true, 1, 'interop', 'pax', 'updatePaxBonus'),
			get_passenger_documents: buildRoute(true, 1, 'interop', 'pax', 'getPaxDocuments'),
			get_passenger_bonuses: buildRoute(true, 1, 'interop', 'pax', 'getPaxBonuses'),
			get_passenger_document: buildRoute(true, 1, 'interop', 'pax', 'getPaxDocument'),
		},
		support_user: {
			get_support_user: buildRoute(true, 1, 'interop', 'supportUser', 'getSupportUser'),
		},

		flight: {
			get_flight_providers: buildRoute(true, 1, 'interop', 'flights', 'getProvider'),
			get_flights: buildRoute(true, 1, 'interop', 'flights', 'search'),
			send_flights_result_to_tts: buildRoute(
				true,
				1,
				'interop',
				'flights',
				'sendSearchResultToTts'
			),
			book_flights: buildRoute(true, 1, 'interop', 'flights', 'book'),
			issue_flights: buildRoute(true, 1, 'interop', 'flights', 'issue'),
		},

		aeroExpress: {
			get_aero_express: buildRoute(true, 1, 'interop', 'aeroExpress', 'search'),
		},

		train: {
			get_train_providers: buildRoute(true, 1, 'interop', 'trains', 'getProviders'),
			get_trains: buildRoute(true, 1, 'interop', 'trains', 'search'),
			send_trains_result_to_tts: buildRoute(true, 1, 'interop', 'trains', 'sendSearchResultToTts'),
			book_trains: buildRoute(true, 1, 'interop', 'trains', 'book'),
			issue_trains: buildRoute(true, 1, 'interop', 'trains', 'issue'),
		},

		companies: {
			search_companies_by_name: buildRoute(
				true,
				1,
				'interop',
				'companies',
				'searchCompaniesByName'
			),
			get_company_info: buildRoute(true, 1, 'interop', 'companies', 'getCompanyInfo'),
			get_company_cfos: buildRoute(true, 1, 'interop', 'companies', 'getCompanyCfos'),
		},

		document: {
			get_accountant_docs: buildRoute(true, 1, 'interop', 'docs', 'getAccountantDocuments'),
			get_customer_air_companies: buildRoute(true, 1, 'interop', 'docs', 'getCustomerAirCompanies'),
			get_customer_flights: buildRoute(true, 1, 'interop', 'docs', 'getCustomerFlights'),
			get_customer_ticket_orders: buildRoute(true, 1, 'interop', 'docs', 'getCustomerTicketOrders'),
			get_customer_additional_services: buildRoute(
				true,
				1,
				'interop',
				'docs',
				'getCustomerAdditionalServices'
			),
			get_statement_incomes: buildRoute(true, 1, 'interop', 'docs', 'getStatementIncomes'),
			get_statement_open_balance: buildRoute(true, 1, 'interop', 'docs', 'getStatementOpenBalance'),
			get_statement_close_balance: buildRoute(
				true,
				1,
				'interop',
				'docs',
				'getStatementCloseBalance'
			),
			get_statement_sales: buildRoute(true, 1, 'interop', 'docs', 'getStatementSales'),
			get_allowed_persons: buildRoute(true, 1, 'interop', 'docs', 'getAllowedPerson'),
			get_client_dept: buildRoute(true, 1, 'interop', 'docs', 'getDeptInfo'),
			get_client_sales_structure: buildRoute(true, 1, 'interop', 'docs', 'getSalesStructure'),
			get_client_sales: buildRoute(true, 1, 'interop', 'docs', 'getClientSales'),
		},
	},
	webrefs: {
		avia: {
			search_cities: buildRoute(true, 1, 'webrefs', 'avia', 'searchCities'),
			bulk_insert: buildRoute(true, 1, 'webrefs', 'avia', 'bulkInsert'),
		},
		city: {
			search_cities: buildRoute(true, 1, 'webrefs', 'city', 'searchCities'),
			bulk_insert: buildRoute(true, 1, 'webrefs', 'city', 'bulkInsert'),
		},
		country: {
			search_countries: buildRoute(true, 1, 'webrefs', 'country', 'searchCountries'),
			get_all_countries: buildRoute(true, 1, 'webrefs', 'country', 'getAllCountries'),
			bulk_insert: buildRoute(true, 1, 'webrefs', 'country', 'bulkInsert'),
		},
		elastic: {
			delete_all_data_by_index: buildRoute(true, 1, 'webrefs', 'elastic', 'deleteAllDataByIndex'),
			get_indices: buildRoute(true, 1, 'webrefs', 'elastic', 'getIndices'),
			delete_indices: buildRoute(true, 1, 'webrefs', 'elastic', 'deleteIndices'),
		},
		train: {
			search_station: buildRoute(true, 1, 'webrefs', 'train', 'searchStation'),
			bulk_insert: buildRoute(true, 1, 'webrefs', 'train', 'bulkInsert'),
		},
	},
} as const satisfies DeepType

export enum SocialMediaLinks {
	INSTAGRAM = '#',
	TELEGRAM = '#',
	FACEBOOK = '#',
	TWITTER = '#',
	DISCORD = '#',
	TWITCH = '#',
	YOUTUBE = '#',
}

export const Contacts = {
	address: {},
	phone: {},
	email: {},
}
