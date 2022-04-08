import { EndBalance } from '././endBalance';
import { StartBalance } from '././startBalance';
import { StatementLine } from '././statementLine';

export class Statement {
    /**
    * GUID used to identify the Statement.
    */
    'id'?: string;
    /**
    * The Xero generated feed connection Id that identifies the Xero Bank Account Container into which the statement should be delivered. This is obtained by calling GET FeedConnections.
    */
    'feedConnectionId'?: string;
    /**
    * Current status of statements
    */
    'status'?: Statement.StatusEnum;
    /**
    * Opening balance date (can be no older than one year from the current date) ISO-8601 YYYY-MM-DD
    */
    'startDate'?: string;
    /**
    * Closing balance date ISO-8601 YYYY-MM-DD
    */
    'endDate'?: string;
    'startBalance'?: StartBalance;
    'endBalance'?: EndBalance;
    'statementLines'?: Array<StatementLine>;
    'errors'?: Array<Error>;
    'statementLineCount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }        {
            "name": "feedConnectionId",
            "baseName": "feedConnectionId",
            "type": "string"
        }        {
            "name": "status",
            "baseName": "status",
            "type": "Statement.StatusEnum"
        }        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        }        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        }        {
            "name": "startBalance",
            "baseName": "startBalance",
            "type": "StartBalance"
        }        {
            "name": "endBalance",
            "baseName": "endBalance",
            "type": "EndBalance"
        }        {
            "name": "statementLines",
            "baseName": "statementLines",
            "type": "Array<StatementLine>"
        }        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<Error>"
        }        {
            "name": "statementLineCount",
            "baseName": "statementLineCount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Statement.attributeTypeMap;
    }
}

export namespace Statement {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Rejected = <any> 'REJECTED',
        Delivered = <any> 'DELIVERED'
    }
}
