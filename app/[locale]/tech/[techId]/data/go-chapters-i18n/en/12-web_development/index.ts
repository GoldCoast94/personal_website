// Chapter 12: Web Development
import SimpleHTTPServer, { metadata as simpleHTTPServerMetadata } from './12.1.1-jian-dan-de-http-fu-wu-qi';
import MultipleRoutes, { metadata as multipleRoutesMetadata } from './12.1.2-multiple-routes';
import RequestInfo, { metadata as requestInfoMetadata } from './12.2.1-request-info';
import QueryParams, { metadata as queryParamsMetadata } from './12.2.2-query-params';
import FormData, { metadata as formDataMetadata } from './12.2.3-form-data';
import ReturningJSON, { metadata as returningJSONMetadata } from './12.3.1-fan-hui-json';
import ReceivingJSON, { metadata as receivingJSONMetadata } from './12.3.2-jie-shou-json';
import CustomRouter, { metadata as customRouterMetadata } from './12.4.1-custom-router';
import Middleware, { metadata as middlewareMetadata } from './12.4.2-middleware';
import FileUpload, { metadata as fileUploadMetadata } from './12.5.1-file-upload';
import FileDownload, { metadata as fileDownloadMetadata } from './12.5.2-file-download';
import HTMLTemplate, { metadata as htmlTemplateMetadata } from './12.6.1-html-mu-ban';
import TemplateFiles, { metadata as templateFilesMetadata } from './12.6.2-template-files';
import CookieOperations, { metadata as cookieOperationsMetadata } from './12.7.1-cookie-cao-zuo';
import SessionManagement, { metadata as sessionManagementMetadata } from './12.7.2-session-guan-li';
import Exercise3AuthSystem, { metadata as exercise3AuthSystemMetadata } from './exercise-01-auth-system';
import Exercise1BlogSystem, { metadata as exercise1BlogSystemMetadata } from './exercise-02-blog-system';
import Exercise2FileServer, { metadata as exercise2FileServerMetadata } from './exercise-03-file-server';
import Exercise5ImageProcessingAPI, { metadata as exercise5ImageProcessingAPIMetadata } from './exercise-04-image-processing-api';
import Exercise4WebSocketChat, { metadata as exercise4WebSocketChatMetadata } from './exercise-05-websocket-chat';

export const chapter12Sections = [
  { component: SimpleHTTPServer, metadata: simpleHTTPServerMetadata },
  { component: MultipleRoutes, metadata: multipleRoutesMetadata },
  { component: RequestInfo, metadata: requestInfoMetadata },
  { component: QueryParams, metadata: queryParamsMetadata },
  { component: FormData, metadata: formDataMetadata },
  { component: ReturningJSON, metadata: returningJSONMetadata },
  { component: ReceivingJSON, metadata: receivingJSONMetadata },
  { component: CustomRouter, metadata: customRouterMetadata },
  { component: Middleware, metadata: middlewareMetadata },
  { component: FileUpload, metadata: fileUploadMetadata },
  { component: FileDownload, metadata: fileDownloadMetadata },
  { component: HTMLTemplate, metadata: htmlTemplateMetadata },
  { component: TemplateFiles, metadata: templateFilesMetadata },
  { component: CookieOperations, metadata: cookieOperationsMetadata },
  { component: SessionManagement, metadata: sessionManagementMetadata },
  { component: Exercise3AuthSystem, metadata: exercise3AuthSystemMetadata },
  { component: Exercise1BlogSystem, metadata: exercise1BlogSystemMetadata },
  { component: Exercise2FileServer, metadata: exercise2FileServerMetadata },
  { component: Exercise5ImageProcessingAPI, metadata: exercise5ImageProcessingAPIMetadata },
  { component: Exercise4WebSocketChat, metadata: exercise4WebSocketChatMetadata },
];

export {
  SimpleHTTPServer,
  MultipleRoutes,
  RequestInfo,
  QueryParams,
  FormData,
  ReturningJSON,
  ReceivingJSON,
  CustomRouter,
  Middleware,
  FileUpload,
  FileDownload,
  HTMLTemplate,
  TemplateFiles,
  CookieOperations,
  SessionManagement,
  Exercise3AuthSystem,
  Exercise1BlogSystem,
  Exercise2FileServer,
  Exercise5ImageProcessingAPI,
  Exercise4WebSocketChat,
};
