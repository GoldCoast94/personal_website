// 第12章：Web開発
import シンプルなHTTPサーバー, { metadata as simpleHTTPServerMetadata } from './12.1.1-jian-dan-de-http-fu-wu-qi';
import 複数のルート, { metadata as multipleRoutesMetadata } from './12.1.2-multiple-routes';
import リクエスト情報, { metadata as requestInfoMetadata } from './12.2.1-request-info';
import クエリパラメータ, { metadata as queryParamsMetadata } from './12.2.2-query-params';
import フォームデータの処理, { metadata as formDataMetadata } from './12.2.3-form-data';
import JSONを返す, { metadata as returningJSONMetadata } from './12.3.1-fan-hui-json';
import JSONを受け取る, { metadata as receivingJSONMetadata } from './12.3.2-jie-shou-json';
import カスタムルーター, { metadata as customRouterMetadata } from './12.4.1-custom-router';
import ミドルウェア, { metadata as middlewareMetadata } from './12.4.2-middleware';
import ファイルアップロード, { metadata as fileUploadMetadata } from './12.5.1-file-upload';
import ファイルダウンロード, { metadata as fileDownloadMetadata } from './12.5.2-file-download';
import HTMLテンプレート, { metadata as htmlTemplateMetadata } from './12.6.1-html-mu-ban';
import テンプレートファイル, { metadata as templateFilesMetadata } from './12.6.2-template-files';
import Cookie操作, { metadata as cookieOperationsMetadata } from './12.7.1-cookie-cao-zuo';
import Session管理, { metadata as sessionManagementMetadata } from './12.7.2-session-guan-li';
import 練習3認証システム, { metadata as exercise3AuthSystemMetadata } from './exercise-01-auth-system';
import 練習1ブログシステム, { metadata as exercise1BlogSystemMetadata } from './exercise-02-blog-system';
import 練習2ファイルサーバー, { metadata as exercise2FileServerMetadata } from './exercise-03-file-server';
import 練習5画像処理API, { metadata as exercise5ImageProcessingAPIMetadata } from './exercise-04-image-processing-api';
import 練習4WebSocketチャット, { metadata as exercise4WebSocketChatMetadata } from './exercise-05-websocket-chat';

export const chapter12Sections = [
  { component: シンプルなHTTPサーバー, metadata: simpleHTTPServerMetadata },
  { component: 複数のルート, metadata: multipleRoutesMetadata },
  { component: リクエスト情報, metadata: requestInfoMetadata },
  { component: クエリパラメータ, metadata: queryParamsMetadata },
  { component: フォームデータの処理, metadata: formDataMetadata },
  { component: JSONを返す, metadata: returningJSONMetadata },
  { component: JSONを受け取る, metadata: receivingJSONMetadata },
  { component: カスタムルーター, metadata: customRouterMetadata },
  { component: ミドルウェア, metadata: middlewareMetadata },
  { component: ファイルアップロード, metadata: fileUploadMetadata },
  { component: ファイルダウンロード, metadata: fileDownloadMetadata },
  { component: HTMLテンプレート, metadata: htmlTemplateMetadata },
  { component: テンプレートファイル, metadata: templateFilesMetadata },
  { component: Cookie操作, metadata: cookieOperationsMetadata },
  { component: Session管理, metadata: sessionManagementMetadata },
  { component: 練習3認証システム, metadata: exercise3AuthSystemMetadata },
  { component: 練習1ブログシステム, metadata: exercise1BlogSystemMetadata },
  { component: 練習2ファイルサーバー, metadata: exercise2FileServerMetadata },
  { component: 練習5画像処理API, metadata: exercise5ImageProcessingAPIMetadata },
  { component: 練習4WebSocketチャット, metadata: exercise4WebSocketChatMetadata },
];

export {
  シンプルなHTTPサーバー,
  複数のルート,
  リクエスト情報,
  クエリパラメータ,
  フォームデータの処理,
  JSONを返す,
  JSONを受け取る,
  カスタムルーター,
  ミドルウェア,
  ファイルアップロード,
  ファイルダウンロード,
  HTMLテンプレート,
  テンプレートファイル,
  Cookie操作,
  Session管理,
  練習3認証システム,
  練習1ブログシステム,
  練習2ファイルサーバー,
  練習5画像処理API,
  練習4WebSocketチャット,
};
