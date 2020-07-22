/**
 * OEML - REST API
 * This section will provide necessary information about the `CoinAPI OEML REST API` protocol. This API is also available in the Postman application: <a href=\"https://postman.coinapi.io/\" target=\"_blank\">https://postman.coinapi.io/</a>       
 *
 * The version of the OpenAPI document: v1
 * Contact: support@coinapi.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { OrdSide } from './ordSide';
import { OrdStatus } from './ordStatus';
import { OrdType } from './ordType';
import { OrderExecutionReportAllOf } from './orderExecutionReportAllOf';
import { OrderNewSingleRequest } from './orderNewSingleRequest';
import { TimeInForce } from './timeInForce';

/**
* The order execution report object.
*/
export class OrderExecutionReport {
    /**
    * Exchange identifier used to identify the routing destination.
    */
    'exchangeId': string;
    /**
    * The unique identifier of the order assigned by the client.
    */
    'clientOrderId': string;
    /**
    * Exchange symbol. One of the properties (`symbol_id_exchange`, `symbol_id_coinapi`) is required to identify the market for the new order.
    */
    'symbolIdExchange'?: string;
    /**
    * CoinAPI symbol. One of the properties (`symbol_id_exchange`, `symbol_id_coinapi`) is required to identify the market for the new order.
    */
    'symbolIdCoinapi'?: string;
    /**
    * Order quantity.
    */
    'amountOrder': number;
    /**
    * Order price.
    */
    'price': number;
    'side': OrdSide;
    'orderType': OrdType;
    'timeInForce': TimeInForce;
    /**
    * Expiration time. Conditionaly required for orders with time_in_force = `GOOD_TILL_TIME_EXCHANGE` or `GOOD_TILL_TIME_OEML`.
    */
    'expireTime'?: string;
    /**
    * Order execution instructions are documented in the separate section: <a href=\"#oeml-order-params-exec\">OEML / Starter Guide / Order parameters / Execution instructions</a> 
    */
    'execInst'?: Array<OrderExecutionReport.ExecInstEnum>;
    /**
    * The unique identifier of the order assigned by the client converted to the exchange order tag format for the purpose of tracking it.
    */
    'clientOrderIdFormatExchange': string;
    /**
    * Unique identifier of the order assigned by the exchange or executing system.
    */
    'exchangeOrderId'?: string;
    /**
    * Quantity open for further execution. `amount_open` = `amount_order` - `amount_filled`
    */
    'amountOpen': number;
    /**
    * Total quantity filled.
    */
    'amountFilled': number;
    'status': OrdStatus;
    /**
    * Timestamped history of order status changes.
    */
    'timeOrder': Array<Array<string>>;
    /**
    * Error message
    */
    'errorMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "exchangeId",
            "baseName": "exchange_id",
            "type": "string"
        },
        {
            "name": "clientOrderId",
            "baseName": "client_order_id",
            "type": "string"
        },
        {
            "name": "symbolIdExchange",
            "baseName": "symbol_id_exchange",
            "type": "string"
        },
        {
            "name": "symbolIdCoinapi",
            "baseName": "symbol_id_coinapi",
            "type": "string"
        },
        {
            "name": "amountOrder",
            "baseName": "amount_order",
            "type": "number"
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number"
        },
        {
            "name": "side",
            "baseName": "side",
            "type": "OrdSide"
        },
        {
            "name": "orderType",
            "baseName": "order_type",
            "type": "OrdType"
        },
        {
            "name": "timeInForce",
            "baseName": "time_in_force",
            "type": "TimeInForce"
        },
        {
            "name": "expireTime",
            "baseName": "expire_time",
            "type": "string"
        },
        {
            "name": "execInst",
            "baseName": "exec_inst",
            "type": "Array<OrderExecutionReport.ExecInstEnum>"
        },
        {
            "name": "clientOrderIdFormatExchange",
            "baseName": "client_order_id_format_exchange",
            "type": "string"
        },
        {
            "name": "exchangeOrderId",
            "baseName": "exchange_order_id",
            "type": "string"
        },
        {
            "name": "amountOpen",
            "baseName": "amount_open",
            "type": "number"
        },
        {
            "name": "amountFilled",
            "baseName": "amount_filled",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "OrdStatus"
        },
        {
            "name": "timeOrder",
            "baseName": "time_order",
            "type": "Array<Array<string>>"
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrderExecutionReport.attributeTypeMap;
    }
}

export namespace OrderExecutionReport {
    export enum ExecInstEnum {
        MAKERORCANCEL = <any> 'MAKER_OR_CANCEL',
        AUCTIONONLY = <any> 'AUCTION_ONLY',
        INDICATIONOFINTEREST = <any> 'INDICATION_OF_INTEREST'
    }
}