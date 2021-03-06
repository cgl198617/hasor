const contextPath = () => {
    return (window.CONTEXT_PATH === '{CONTEXT_PATH}') ? '' : window.CONTEXT_PATH;
};
const apiBaseUrl = (oriUrl) => {
    const baseUrl = (window.API_BASE_URL === '{API_BASE_URL}') ? '/' : window.API_BASE_URL;
    return (baseUrl + oriUrl).replace('//', '/');
};
const adminBaseUrl = (oriUrl) => {
    const baseUrl = (window.ADMIN_BASE_URL === '{ADMIN_BASE_URL}') ? '/' : window.ADMIN_BASE_URL;
    return (baseUrl + oriUrl).replace('//', '/');
};

const defaultOptionData = {
    resultStructure: true,
    responseFormat:
        '{\n' +
        '  "success"      : "@resultStatus",\n' +
        '  "message"      : "@resultMessage",\n' +
        '  "code"         : "@resultCode",\n' +
        '  "lifeCycleTime": "@timeLifeCycle",\n' +
        '  "executionTime": "@timeExecution",\n' +
        '  "value"        : "@resultData"\n' +
        '}',
    wrapAllParameters: false,
    wrapParameterName: 'root',
};

// 通用查 配置
const ApiUrl = {
    checkVersion: 'http://apis.hasor.net/projects/hasor-dataway/checkVersion',
    //
    apiInfo: contextPath() + adminBaseUrl(`/api/api-info`),
    apiList: contextPath() + adminBaseUrl(`/api/api-list`),
    apiDetail: contextPath() + adminBaseUrl(`/api/api-detail`),
    apiHistory: contextPath() + adminBaseUrl(`/api/api-history`),
    apiHistoryInfo: contextPath() + adminBaseUrl(`/api/get-history`),
    //
    execute: contextPath() + apiBaseUrl(`/`),
    apiSave: contextPath() + adminBaseUrl(`/api/save-api`),
    perform: contextPath() + adminBaseUrl(`/api/perform`),
    smokeTest: contextPath() + adminBaseUrl(`/api/smoke`),
    publish: contextPath() + adminBaseUrl(`/api/publish`),
    disable: contextPath() + adminBaseUrl(`/api/disable`),
    deleteApi: contextPath() + adminBaseUrl(`/api/delete`),
    //
    analyzeSchema: contextPath() + adminBaseUrl(`/api/analyze-schema`),
};

export {
    ApiUrl, defaultOptionData, apiBaseUrl, contextPath
};
