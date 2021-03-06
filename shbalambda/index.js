'use strict';

/*==============================================================================
 * FILE NAME : index.js
 * DISCRIPTION : 글로벌 인터넷뱅킹 Lambda 메인
 *------------------------------------------------------------------------------
 *------------------------------------------------------------------------------
 * DATE			AUTHOR	CONTENT    
 *------------------------------------------------------------------------------
 * 2017-09-25	고동환	최초작성
 *=============================================================================*/

// Alexa imports
const Alexa = require('alexa-sdk');
// 환경설정
const Config = require('./common/Config');

//공통 Intent
const CommonHandlers = require('./gib/common/CommonHandlers');

// 환율조회
const ExchangeRateHandlers = require('./gib/exchangerate/Handlers');
// 계좌조회
const AccountListHandlers = require('./gib/accountlist/Handlers');
// 계좌 거래내역 조회 
const AccountTrxHandlers = require('./gib/accountTrx/Handlers');
//대출 조회 
const LoanListHandlers = require('./gib/loanlist/Handlers');

// skill app 앱ID 설정 (./common/Config.js 에 정의)
const APP_ID = Config.appId; 

exports.handler = function (event, context, callback) {
    let alexa = Alexa.handler(event, context);

    alexa.appId = APP_ID;
    alexa.registerHandlers(CommonHandlers ,ExchangeRateHandlers ,AccountListHandlers, AccountTrxHandlers, LoanListHandlers);

    console.log(`Beginning execution for skill with APP_ID=${alexa.appId}`);
    alexa.execute();
    console.log(`Ending execution  for skill with APP_ID=${alexa.appId}`);
};