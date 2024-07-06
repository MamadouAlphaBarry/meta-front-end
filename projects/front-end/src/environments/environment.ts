export const API_USER_BASE_URL=""
export const API_CUSTOMER_BASE_URL=""
export const API_REPORT_BASE_URL=""
export const environment = {
    production: false,
    apiUrl: API_USER_BASE_URL+"",
    title: 'META',

    microservices: {
        userCommand: 'USER-SERVICE-COMMAND/command/user',
        userQuery: 'USER-SERVICE-QUERY-SIDE//command/user',
        resourceCommand: 'RESOURCE-SERVICE-COMMAND/' ,// Nom du microservice 2 en production
        resourceQuery:'RESOURCE-SERVICE-QUERY-SIDE/',
        customerCommand: 'CUSTOMER-SERVICE-COMMAND-SID/command/user',
        customerQuery: 'CUSTOMER-SERVICE-QUERY-SID/command/user',
        jobCommand: 'JOB-SERVICE-QUERY-SIDE/' ,// Nom du microservice 2 en production
        jobQuery:'JOB-SERVICE-COMMAND/',
        reportingCommand: 'REPORTING-SERVICE-COMMAND/command/user',
        reportingQuery: 'RESOURCE-SERVICE-QUERY-SIDE/command/user',

        // Ajoutez d'autres microservices ici si nécessaire
    }
  };
