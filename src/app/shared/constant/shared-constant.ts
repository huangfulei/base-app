export class SharedConstant {
// Generic context to help with API URL path building
  public static JWT_TOKEN = 'morpheusJwt';
  public static AMPXY_HOST = 'ampxy_host';
  public static SUPPLYPOWER = 'gmsupplypower.com';
  public static SPW002 = 'SPW002';

  public static SECURITY_CONTEXT = '/api/security';

  // Common JSON Model Variables
  public static RESULT_LIST_PARAMETER = 'resultList';
  public static DATA_LIST_PARAMETER = 'data';
  public static PRIMARY_KEY_PARAMETER = 'primaryKey';
  public static PAGING_PARAMETER = 'paging';
  public static PRIMARY_KEY_PARAMETER_DEFAULT = 'id';

  // User Variable Names
  public static MENU_LIST_PARAMETER = 'menuList';
  public static USER_PARAMETER = 'user';
  public static BUSINESS_USER_PARAMETER = 'businessUser';
  public static APP_PARAMETER = 'app';
  public static SITE_CODE_PARAMETER = 'siteCodes';

  // Message Parameters
  public static SUCCESS_MESSAGE_PARAMETER = 'message';
  public static ERROR_MESSAGE_PARAMETER = 'errorList';
  public static SYSTEM_FAILURE_MESSAGE_PARAMETER = 'systemFailureMessage';

  // Common APIs
  public static USER_SESSION_CONTROLLER_ENDPOINT = '/user/get/permissions';
  public static SITE_CODE_CONTROLLER_ENDPOINT = '/ldap/spld/user/get';

  // Time out Configurations
  public static MESSAGE_TIMEOUT_MILLISECONDS = 10000; // 10 seconds
  public static SESSION_TIMEOUT = 30; // 30 min
  public static SESSION_TIMEOUT_WARNING = 25; // 25 min
  public static SESSION_TIMER_INTERVAL = 1000; // 1 sec
  public static SESSION_TIMER_DELAY = 5000; // 5 sec

  // Breadcrumb Variable Name
  public static ROUTE_DATA_FOR_BREADCRUMB: string = 'breadcrumb';
  public static ROUTE_DATA_FOR_PAGE_TITLE: string = 'title';
  public static ROUTE_DATA_FOR_BREADCRUMB_ROOT: string = 'breadcrumbRoot';

  public static DEFAULT_GRID_FILTERING_DELAY = 500;

  public static HTTP_GET_EXTENSION = 'get/';
  public static HTTP_LIST_EXTENSION = 'list/';
  public static HTTP_SEARCH_EXTENSION = 'search';
  public static SUPPLYPOWER_URL = 'https://gmsupplypower.covisint.com/web/portal/home';
  public static LOGOUT_URL = '/assets/html/logout.html';
  public static NO_ACCESS_URL = '/assets/html/no-access.html';

  public static MONTH_LIST: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

}
